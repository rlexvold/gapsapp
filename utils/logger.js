let log4js = require('log4js')
var log = log4js.getLogger()

function init(config) {
    let severity = config.Logging.Level || 'debug'
    let level = log4js.levels.toLevel(severity)
    log.setLevel(level)
}

module.exports = log
module.exports.init = init