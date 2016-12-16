var log = require.main.require('./utils/logger')
var util = require('util')
var assert = require('assert')
var MongoClient = require('mongodb').MongoClient
var food = require.main.require('./db/food')

var db
var client = new MongoClient()

function connect(config) {
    var connectString
    close()
    if (config.Database.Username) {
        connectString = util.format('mongodb://%s:%s@%s:%s/%s', config.Database.Username, config.Database.Password, config.Database.URI, config.Database.Port, config.Database.DatabaseName)
    } else {
        connectString = util.format('mongodb://%s:%s/%s', config.Database.URI, config.Database.Port, config.Database.DatabaseName)
    }
    log.debug('Connecting to ' + connectString)

    client.connect(connectString, {
        poolSize: 10
    }, function (err, database) {
        assert.equal(null, err)
        log.debug('Connection successful')
        db = database
        food.init(db)
    })
}

function getCollection(collection) {
    assert.notEqual(null, collection)
    assert.notEqual(null, db)
    return db.collection(collection)
}

function close() {
    if (db) {
        log.info('Closing database')
        db.close()
    }
}
module.exports.close = close
module.exports.connect = connect
module.exports.getCollection = getCollection