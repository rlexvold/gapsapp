/* eslint no-unused-vars:0 */
import log from '../utils/logger'
let ObjectID = require('mongodb').ObjectID

function handleError(res, err, message) {
    log.error('ERROR: ' + err.message)
    res.status(500).json({
        'error': message,
        'detail': err.message
    })
}

function processResponse(res, response, successCode, err, errorMessage) {
    if (err) {
        handleError(res, err, errorMessage)
    } else {
        log.debug('Response: ' + JSON.stringify(response))
        res.status(successCode).json(response)
    }
}

function createGenericApi(app, db, name) {
    log.debug('creating ' + name + ' generic API')
        /**
         * GET /api/<name>
         * Get one or more items based on search criteria
         */
    app.get('/api/' + name, function(req, res, next) {
        let query = req.query
        log.debug('query params: ' + JSON.stringify(req.query))

        if (query.query) {
            log.debug('Converting query to JSON: ' + query.query)
            query = JSON.parse(query.query)
            log.debug('Query updated: ' + JSON.stringify(query))
        }
        db.getCollection(name).find(query).toArray(function(err, results) {
            processResponse(res, results, 200, err, 'Failed to find food')
        })
    })

    /**
     * GET /api/<name>/:id
     * Get one item with id
     */
    app.get('/api/' + name + '/:id', function(req, res, next) {
        let id = new ObjectID(req.params.id)
        log.debug('Finding ' + name + ' with id: ' + id)

        db.collection(name).find({
            _id: id
        }).toArray(function(err, results) {
            processResponse(res, results, 200, err, 'Failed to find food')
        })
    })

    /**
     * GET /api/<name>/count
     * Returns the total number of foods.
     */
    app.get('/api/' + name + 'count', function(req, res, next) {
        log.debug(name + ' count')
        db.collection(name).count(function(err, count) {
            log.debug('count return')
            processResponse(res, count, 200, err, 'Failed to get count')
        })
    })

    /**
     * POST /api/<name>
     * Updates item in the database.
     */
    app.post('/api/' + name, function(req, res, next) {
        let item = req.body
        log.debug('POST: ' + name + ': ' + JSON.stringify(item))
        db.collection(name).insertOne(item, function(err, doc) {
            processResponse(res, doc.ops[0], 201, err, 'Failed to add ' + name)
        })
    })

    /**
     * PUT /api/<name>
     * Updates item in the database.
     */
    app.put('/api/' + name, function(req, res, next) {
        let item = req.body
        log.debug('PUT: ' + name + ': ' + JSON.stringify(item))
        db.collection(name).findOneAndUpdate({
            _id: new ObjectID(item._id)
        }, item, function(err, doc) {
            processResponse(res, doc.ops[0], 201, err, 'Failed to update ' + name)
        })
    })

    /**
     * DELETE /api/<name>/:id
     * Delete item in the database.
     */
    app.delete('/api/' + name + '/:id', function(req, res, next) {
        let id = new ObjectID(req.params.id)
        log.debug('DELETE: ' + name + ': ' + id)
        db.collection(name).deleteOne({
            _id: id
        }, function(err, doc) {
            processResponse(res, doc.ops[0], 200, err, 'Failed to delete ' + name + ' with id: ' + id)
        })
    })
}

module.exports.createGenericApi = createGenericApi