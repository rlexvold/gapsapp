/*eslint no-unused-vars: ["error", { "args": "none" }]*/
let config = require('config')
let log = require('bristol')

let severity = config.Logging.Level || 'debug'

log.addTarget('console').withFormatter('human').withLowestSeverity(severity)

module.exports = log