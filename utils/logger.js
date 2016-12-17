/*eslint no-unused-vars: ["error", { "args": "none" }]*/
let log = require('bristol')

let severity = 'debug'

log.addTarget('console').withFormatter('human').withLowestSeverity(severity)

module.exports = log