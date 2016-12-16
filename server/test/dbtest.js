var log = require.main.require('utils/logger')
var describe = require('mocha').describe
var it = require('mocha').it
var chai = require('chai')
var expect = chai.expect
var db = require('../db/mongo')
var config = require('config')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

log.debug(JSON.stringify(config))

describe('Database Tests', function () {
    describe('Connection Security', function () {
        it('should connect successfully', function () {
            return expect(Promise.resolve(db.connect.bind(db, config))).to.eventually.not.throw(Error)
        })

        db.close()
        it('should fail to connect with bad credentials', function () {
            config.Database.Username = 'wrong_name'
            return expect(Promise.resolve(db.connect.bind(db, config))).to.eventually.throw(Error)
        })
        db.close()
    })
})
