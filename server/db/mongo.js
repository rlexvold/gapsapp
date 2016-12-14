var log = require('../../utils/logger')
var MongoClient = require('mongodb').MongoClient
var config = require('config')
var db

var connectString = config.Database.URI
log.debug('Connecting to ' + connectString)
MongoClient.connect(connectString, function(err, database) {
    if (err)
        throw err;
    log.debug('Connection successful')
    db = database;
});

function close() {
    if (db) {
        log.info('Closing database')
        db.close()
    }
}
module.exports.close = close
