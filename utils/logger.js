/*eslint no-unused-vars: ["error", { "args": "none" }]*/
var log = require('bristol')

function init(config) {
    var severity = config.Logging.Level || 'debug'
    log.addTarget('console').withFormatter('human').withLowestSeverity(severity)
}

module.exports = log
module.exports.init = init
module.exports.stream = {
    write: function (message, encoding) {
        log.info(message, encoding)
    }
}