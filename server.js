/*eslint no-unused-vars: 0*/
// Babel ES6/JSX Compiler
require('babel-register')

let path = require('path')
let express = require('express')
let bodyParser = require('body-parser')
let compression = require('compression')
let favicon = require('serve-favicon')
let log = require('./utils/logger')
let async = require('async')
let colors = require('colors')
let mongoose = require('mongoose')
let request = require('request')
let React = require('react')
let ReactDOM = require('react-dom/server')
let Router = require('react-router')
let swig = require('swig')
let xml2js = require('xml2js')
let _ = require('underscore')

let routes = require('./app/routes')
let Foods = require('./models/food')

let app = express()

mongoose.connect('mongodb://gapsapp:Lutef1sk@ds111178.mlab.com:11178/lifetech')
mongoose.connection.on('error', function () {
    log.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red)
})

app.set('port', 3000)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))
app.use(express.static(path.join(__dirname, 'public')))

/**
 * GET /api/foods
 */
app.get('/api/phase', function (req, res, next) {
    let params = req.query
    let phase = 7
    if (params.phase) {
        phase = params.phase
    }
    log.info('Phase: ' + phase)

    Foods.where('phase').lte(phase).sort('name').exec(function (err, foodList) {
        if (err) {
            return next(err)
        }
        log.info('Foods found: ' + foodList.length)

        return res.send(foodList)
    })
})

/**
 * GET /api/foods/count
 * Returns the total number of foods.
 */
app.get('/api/foodlist/count', function (req, res, next) {
    Foods.count({}, function (err, count) {
        if (err) {
            return next(err)
        }
        res.send({
            count: count
        })
    })
})

/**
 * GET /api/foods/search
 * Looks up a character by name. (case-insensitive)
 */
app.get('/api/foods/search', function (req, res, next) {
    let foodName = new RegExp(req.query.name, 'i')

    Foods.find({
        name: foodName
    }, function (err, foods) {
        if (err) {
            return next(err)
        }

        if (!foods) {
            return res.status(404).send({
                message: 'Food not found.'
            })
        }

        return res.send(foods)
    })
})

/**
 * GET /api/foods/:id
 *
 */
app.get('/api/food', function (req, res, next) {
    let id = req.params.id

    Foods.findOne({
        foodId: id
    }, function (err, food) {
        if (err) {
            return next(err)
        }

        if (!food) {
            return res.status(404).send({
                message: 'Food not found.'
            })
        }

        return res.send(food)
    })
})

/**
 * POST /api/food
 * Adds new food to the database.
 */
app.post('/api/food', function (req, res, next) {
    let category = req.body.category
    let foodName = req.body.name
    let phase = req.body.phase
    let food = new Foods({
        _id: mongoose.Types.ObjectId(),
        category: category,
        phase: phase,
        name: foodName
    })
    food.save(function (err) {
        if (err) {
            return next(err)
        }
        return res.send({
            message: foodName + ' has been added successfully!'
        })
    })
})

app.use(function (req, res) {
    Router.match({
        routes: routes.default,
        location: req.url
    }, function (err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            let html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps))
            let page = swig.renderFile('views/index.html', {
                html: html
            })
            res.status(200).send(page)
        } else {
            res.status(404).send('Page Not Found')
        }
    })
})

app.use(function (err, req, res, next) {
    log.log(err.stack.red)
    res.status(err.status || 500)
    res.send({
        message: err.message
    })
})

/**
 * Socket.io stuff.
 */
let server = require('http').createServer(app)
let io = require('socket.io')(server)
let onlineUsers = 0

io.sockets.on('connection', function (socket) {
    onlineUsers++

    io.sockets.emit('onlineUsers', {
        onlineUsers: onlineUsers
    })

    socket.on('disconnect', function () {
        onlineUsers--
        io.sockets.emit('onlineUsers', {
            onlineUsers: onlineUsers
        })
    })
})

server.listen(app.get('port'), function () {
    log.info('Express server listening on port ' + app.get('port'))
})

module.exports = app