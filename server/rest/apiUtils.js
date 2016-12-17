var log = require.main.require('./utils/logger')

function handleError(res, err, message) {
    log.error('ERROR: ' + err.message)
    res.status(500).json({
        'error': message,
        'detail': err.message
    })
}

function processResponse(res, response, successCode, err, errorMessage) {
    if (err) {
        handleError(res, err, errorMessage)
    } else {
        log.debug('Response: ' + JSON.stringify(response))
        res.status(successCode).json(response)
    }
}

module.exports.handleError = handleError
module.exports.processResponse = processResponse