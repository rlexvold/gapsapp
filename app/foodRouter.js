var Foods = require('../models/food')

module.exports.registerRoutes = function registerRoutes(app, mongoose) {
    /**
     * GET /api/foods
     */
    app.get('/api/foods/:phase', function(req, res, next) {
        var params = req.query
        var phase = params.phase
        console.info('Phase: ' + phase)

        Foods.where('phase').lte(phase).sort('name').exec(function(err, foodList) {
            console.info('Foods found: ' + foodList.length)
            if (err)
                return next(err)

            return res.send(foodList)
        })
    })

    /**
     * GET /api/foods/count
     * Returns the total number of foods.
     */
    app.get('/api/foods/count', function(req, res, next) {
        Foods.count({}, function(err, count) {
            if (err)
                return next(err)
            res.send({count: count})
        })
    })

    /**
     * GET /api/foods/search
     * Looks up a character by name. (case-insensitive)
     */
    app.get('/api/foods/search', function(req, res, next) {
        var foodName = new RegExp(req.query.name, 'i')

        Foods.findOne({
            name: foodName
        }, function(err, food) {
            if (err)
                return next(err)

            if (!food) {
                return res.status(404).send({message: 'Food not found.'})
            }

            return res.send(food)
        })
    })

    /**
     * GET /api/foods/:id
     *
     */
    app.get('/api/foods/:id', function(req, res, next) {
        var id = req.params.id

        Foods.findOne({
            foodId: id
        }, function(err, food) {
            if (err)
                return next(err)

            if (!food) {
                return res.status(404).send({message: 'Food not found.'})
            }

            return res.send(food)
        })
    })

    /**
     * POST /api/foods
     * Adds new food to the database.
     */
    app.post('/api/foods', function(req, res, next) {
        var category = req.body.category
        var foodName = req.body.name
        var phase = req.body.phase
        var food = new Foods({_id: mongoose.Types.ObjectId(), category: category, phase: phase, name: foodName})
        food.save(function(err) {
            if (err)
                return next(err)
            return res.send({
                message: foodName + ' has been added successfully!'
            })
        })
    })
}
