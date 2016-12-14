var log = require('../../utils/logger')
var MongoClient = require('mongodb').MongoClient
var db

MongoClient.connect("mongodb://localhost:27017", function(err, database) {
    if (err)
        throw err;
    db = database;
});

function close() {
    if (db) {
        log.info('Closing database')
        db.close()
    }
}
module.exports.close = close
