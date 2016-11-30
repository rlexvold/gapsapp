// Babel ES6/JSX Compiler
require('babel-register');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var async = require('async');
var colors = require('colors');
var mongoose = require('mongoose');
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig = require('swig');
var xml2js = require('xml2js');
var _ = require('underscore');

var config = require('./config');
var routes = require('./app/routes');
var Character = require('./models/character');
var Foods = require('./models/food')

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * GET /api/foods
 */
app.get('/api/phase', function(req, res, next) {
    var params = req.query
    var phase = 7
    if (params.phase)
        phase = params.phase
    console.info('Phase: ' + phase)

    Foods.where('phase').lte(phase).sort('name').exec(function(err, foodList) {
        if (err)
            return next(err)
        console.info('Foods found: ' + foodList.length)

        return res.send(foodList)
    })
})

/**
 * GET /api/foods/count
 * Returns the total number of foods.
 */
app.get('/api/foodlist/count', function(req, res, next) {
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

    Foods.find({
        name: foodName
    }, function(err, foods) {
        if (err)
            return next(err)

        if (!foods) {
            return res.status(404).send({message: 'Food not found.'})
        }

        return res.send(foods)
    })
})

/**
 * GET /api/foods/:id
 *
 */
app.get('/api/food', function(req, res, next) {
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
 * POST /api/food
 * Adds new food to the database.
 */
app.post('/api/food', function(req, res, next) {
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

app.use(function(req, res) {
    Router.match({
        routes: routes.default,
        location: req.url
    }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', {html: html});
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

app.use(function(err, req, res, next) {
    console.log(err.stack.red);
    res.status(err.status || 500);
    res.send({message: err.message});
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
    onlineUsers++;

    io.sockets.emit('onlineUsers', {onlineUsers: onlineUsers});

    socket.on('disconnect', function() {
        onlineUsers--;
        io.sockets.emit('onlineUsers', {onlineUsers: onlineUsers});
    });
});

server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
