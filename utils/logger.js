var log = require('bristol')

var severity = process.env.LOG_LEVEL || 'debug'

log.addTarget('console').withFormatter('human').withLowestSeverity(severity)

module.exports = log
module.exports.stream = {
    write: function(message, encoding) {
        log.info(message)
    }
}
