var log = require('./utils/logger')
var express = require('express')
var morgan = require('morgan')
var config = require('config')

var app = express()

app.use(morgan('combine', {stream: log.stream}))

log.debug('NODE_ENV: ' + app.get('env'))

log.debug(JSON.stringify(config))

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500)
        res.render('error', {
            message: err.message,
            error: err
        })
    })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
        message: err.message,
        error: {}
    })
})

module.exports = app
