/*eslint no-unused-vars: ["error", { "args": "none" }]*/
var log = require.main.require('./utils/logger')
var assert = require('assert')
var food = require.main.require('./db/food')

function loadApi(app, db) {
    assert.notEqual(null, db)
    assert.notEqual(null, app)

    /**
     * GET /api/phase
     */
    app.get('/api/phase', function (req, res, next) {
        var params = req.query
        var phase = 7
        var foods

        if (params.phase) {
            phase = params.phase
        }
        log.info('Phase: ' + phase)

        foods = food.getFoodsByPhase(phase)
        log.debug('Got foods for phase: ' + phase, foods)
        return res.status(200).send(foods)
    })

    /**
     * GET /api/foods/count
     * Returns the total number of foods.
     */
    app.get('/api/foodlist/count', function (req, res, next) {
        res.status(200).send(food.foodCount())
    })

    /**
     * GET /api/foods/search
     * Looks up a character by name. (case-insensitive)
     */
    app.get('/api/foods/search', function (req, res, next) {
        return res.status(200).send({
            foodName: 'food'
        })
    })

    /**
     * GET /api/foods/:id
     *
     */
    app.get('/api/food', function (req, res, next) {
        var id = req.params.id
        return res.status(200).send(food.findFoodById(id))
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
        return res.status(200).send(food.addFood(food))
    })
}

module.exports.loadApi = loadApi