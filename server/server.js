/*eslint no-unused-vars: ["error", { "args": "none" }]*/
var log = require('./utils/logger')
var express = require('express')
var config = require('config')
var db = require('./db/mongo')
var foodApi = require('./rest/foodApi')
var compression = require('compression')
var bodyParser = require('body-parser')
var expressLogging = require('express-logging')
var server

var app = express()
app.use(expressLogging(log))

log.debug('NODE_ENV: ' + app.get('env'))

log.debug(JSON.stringify(config))

app.set('port', config.Server.Port || 3000)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

log.debug('Connect to database...')
db.connect(config)

foodApi.loadApi(app)

if (app.get('env') === 'production') {
    // production error handler no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).send({
            message: err.message,
            error: {}
        })
    })
} else {
    // development error handler will print stacktrace
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).send({
            message: err.message,
            error: err
        })
    })
}

server = require('http').createServer(app)
server.listen(app.get('port'), function () {
    log.info('Express server listening on port ' + app.get('port'))
})

module.exports = app