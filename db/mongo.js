import log from '../utils/logger'
import util from 'util'
let MongoClient = require('mongodb').MongoClient
let client = new MongoClient()

function connect(config) {
    var connectString
    close()
    if (config.Database.Username) {
        connectString = util.format('mongodb://%s:%s@%s:%s/%s', config.Database.Username, config.Database.Password, config.Database.URI, config.Database.Port, config.Database.DatabaseName)
    } else {
        connectString = util.format('mongodb://%s:%s/%s', config.Database.URI, config.Database.Port, config.Database.DatabaseName)
    }
    log.debug('Connecting to ' + connectString)

    return client.connect(connectString, {
        poolSize: 10
    })
}


function close(db) {
    if (db) {
        log.info('Closing database')
        db.close().then(function (result) {
            log.debug('Successfully closed database: ' + result)
        }).catch(function (err) {
            log.error('Error closing database: ' + err)
        })

    }
}
module.exports.close = close
module.exports.connect = connect
