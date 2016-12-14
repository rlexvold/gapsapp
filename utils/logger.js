var config = require('config')
var log = require('bristol')

var severity = config.Logging.Level || 'debug'

log.addTarget('console').withFormatter('human').withLowestSeverity(config.Logging.Level)

module.exports = log
module.exports.stream = {
    write: function(message, encoding) {
        log.info(message)
    }
}
