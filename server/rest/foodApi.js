/*eslint no-unused-vars: ["error", { "args": "none" }]*/
var log = require('../utils/logger')
var assert = require('assert')

function loadApi(app, db) {
    assert.notEqual(null, db)
    assert.notEqual(null, app)

    /**
     * GET /api/foods
     */
    app.get('/api/phase', function (req, res, next) {
        var params = req.query
        var phase = 7
        if (params.phase) {
            phase = params.phase
        }
        log.info('Phase: ' + phase)
        return res.send({
            phase: phase
        })
    })

    /**
     * GET /api/foods/count
     * Returns the total number of foods.
     */
    app.get('/api/foodlist/count', function (req, res, next) {
        res.send({
            count: 1
        })
    })

    /**
     * GET /api/foods/search
     * Looks up a character by name. (case-insensitive)
     */
    app.get('/api/foods/search', function (req, res, next) {
        return res.send({
            foodName: 'food'
        })
    })

    /**
     * GET /api/foods/:id
     *
     */
    app.get('/api/food', function (req, res, next) {
        var id = req.params.id
        return res.send({
            id: id
        })
    })


    /**
     * POST /api/food
     * Adds new food to the database.
     */
    app.post('/api/food', function (req, res, next) {
        var category = req.body.category
        var foodName = req.body.name
        var phase = req.body.phase
        var food = {
            category: category,
            phase: phase,
            name: foodName
        }
        return res.send({
            food: food
        })
    })
}

module.exports.loadApi = loadApi