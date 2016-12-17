/*eslint no-unused-vars: 0*/
// Babel ES6/JSX Compiler
require('babel-register')
let logger = require('./utils/logger')
let expressLogging = require('express-logging')
let express = require('express')
let config = require('config')
let path = require('path')
let bodyParser = require('body-parser')
let compression = require('compression')
let favicon = require('serve-favicon')
let React = require('react')
let ReactDOM = require('react-dom/server')
let Router = require('react-router')
let swig = require('swig')
let xml2js = require('xml2js')
let request = require('request')
let _ = require('underscore')

let routes = require('./app/routes')

let app = express()
let server
let io
let onlineUsers

app.set('port', config.Server.Port || 3001)
app.use(compression())
app.use(expressLogging(logger))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))
app.use(express.static(path.join(__dirname, 'public')))

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
            let html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            let page = swig.renderFile('views/index.html', {
                html: html
            })
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    })
})

app.use(function (err, req, res, next) {
    logger.error(err.stack.red);
    res.status(err.status || 500);
    res.send({
        message: err.message
    })
})


/**
 * Socket.io stuff.
 */
server = require('http').createServer(app)
io = require('socket.io')(server)
onlineUsers = 0

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
    logger.info('Express server listening on port ' + app.get('port'))
})

module.exports = app