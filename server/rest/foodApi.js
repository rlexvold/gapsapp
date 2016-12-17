/*eslint no-unused-vars: ["error", { "args": "none" }]*/
var log = require.main.require('./utils/logger')
var db = require.main.require('./db/mongo')
var ObjectID = require('mongodb').ObjectID
var apiUtils = require.main.require('./rest/apiUtils')

var collection

function loadCollection() {
    if (!collection) {
        log.debug('loading food collection')
        collection = db.getCollection('food')
    }
}

function loadApi(app) {
    /**
     * GET /api/food
     * Get one or more foods based on search criteria
     */
    app.get('/api/food', function (req, res, next) {
        var query = req.query
        log.debug('query params: ' + JSON.stringify(req.query))

        if (query.query) {
            log.debug('Converting query to JSON: ' + query.query)
            query = JSON.parse(query.query)
            log.debug('Query updated: ' + JSON.stringify(query))
        }
        loadCollection()
        collection.find(query).toArray(function (err, results) {
            apiUtils.processResponse(res, results, 200, err, 'Failed to find food')
        })
    })

    /**
     * GET /api/foods/count
     * Returns the total number of foods.
     */
    app.get('/api/food/count', function (req, res, next) {
        log.debug('Food count')
        loadCollection()
        collection.count(function (err, count) {
            log.debug('count return')
            apiUtils.processResponse(res, count, 200, err, 'Failed to get count')
        })
    })

    /**
     * POST /api/food
     * Adds new food to the database.
     */
    app.post('/api/food', function (req, res, next) {
        var food = req.body
        food.id = new ObjectID()

        loadCollection()
        collection.insertOne(food, function (err, doc) {
            apiUtils.processResponse(res, doc.ops[0], 201, err, 'Failed to add food')
        })
    })
}

module.exports.loadApi = loadApi