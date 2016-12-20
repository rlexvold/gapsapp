/*eslint no-unused-vars: 0*/
// Babel ES6/JSX Compiler
require('babel-core/register')

let path = require('path')
let express = require('express')
let bodyParser = require('body-parser')
let compression = require('compression')
let favicon = require('serve-favicon')
let util = require('util')
let async = require('async')
let colors = require('colors')
let request = require('request')
let React = require('react')
let ReactDOM = require('react-dom/server')
let Router = require('react-router')
let swig = require('swig')
let xml2js = require('xml2js')
let _ = require('underscore')
let appConfig = require('./config/appConfig')
let log = require('./utils/logger')
let mongo = require('./db/mongo')
let routes = require('./app/routes')
let apiUtil = require('./rest/ApiUtils')
    //let webpack = require('webpack')
    //let webpackMiddleware = require('webpack-dev-middleware')
    //let config = require('./webpack.config.js')
let db = null
let app = express()
    /*eslint no-process-env:0*/
let options = appConfig.loadConfig(process.env.CONFIG)
log.init(options)
log.debug('NODE_ENV: ' + app.get('env'))

log.debug('Final options: ' + JSON.stringify(options))

log.debug('Connect to database...')
mongo.connect(options).then(function(database) {
    log.debug('Connection successful')
    db = database
    startServer()
}).catch(function(err) {
    log.error('Error connecting to database: ' + err)
})

function startServer() {

    app.set('port', options.Server.Port || 3000)
    app.use(compression())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: false
    }))
    app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))
    app.use(express.static(path.join(__dirname, 'public')))
        //    const compiler = webpack(config)

    //    app.use(webpackMiddleware(compiler))

    apiUtil.createGenericApi(app, db, 'food')
    apiUtil.createGenericApi(app, db, 'person')
    apiUtil.createGenericApi(app, db, 'profile')

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

    app.use(function(err, req, res, next) {
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

    io.sockets.on('connection', function(socket) {
        onlineUsers++

        io.sockets.emit('onlineUsers', {
            onlineUsers: onlineUsers
        })

        socket.on('disconnect', function() {
            onlineUsers--
            io.sockets.emit('onlineUsers', {
                onlineUsers: onlineUsers
            })
        })
    })

    server.listen(app.get('port'), function() {
        log.info('Express server listening on port ' + app.get('port'))
    })
}

module.exports = app