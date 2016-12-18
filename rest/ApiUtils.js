import log from '../utils/logger'
import db from '../db/mongo'
import ObjectID from 'mongodb'

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

function createGenericApi(app, name) {
    log.debug('creating ' + name + ' generic API')
        /**
         * GET /api/<name>
         * Get one or more items based on search criteria
         */
    app.get('/api/' + name, function (req, res, next) {
        var query = req.query
        log.debug('query params: ' + JSON.stringify(req.query))

        if (query.query) {
            log.debug('Converting query to JSON: ' + query.query)
            query = JSON.parse(query.query)
            log.debug('Query updated: ' + JSON.stringify(query))
        }
        db.getCollection(name).find(query).toArray(function (err, results) {
            processResponse(res, results, 200, err, 'Failed to find food')
        })
    })

    /**
     * GET /api/<name>/count
     * Returns the total number of foods.
     */
    app.get('/api/' + name + '/count', function (req, res, next) {
        log.debug(name + ' count')
        db.getCollection(name).count(function (err, count) {
            log.debug('count return')
            processResponse(res, count, 200, err, 'Failed to get count')
        })
    })

    /**
     * POST /api/<name>
     * Adds new food to the database.
     */
    app.post('/api/' + name, function (req, res, next) {
        var item = req.body
        item.id = new ObjectID()

        db.getCollection(name).insertOne(item, function (err, doc) {
            processResponse(res, doc.ops[0], 201, err, 'Failed to add ' + name)
        })
    })
}

module.exports.createGenericApi = createGenericApi