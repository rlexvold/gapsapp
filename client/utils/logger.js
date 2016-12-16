/*eslint no-unused-vars: ["error", { "args": "none" }]*/
var config = require('config')
var log = require('bristol')

var severity = config.Logging.Level || 'debug'

log.addTarget('console').withFormatter('human').withLowestSeverity(severity)

module.exports = log