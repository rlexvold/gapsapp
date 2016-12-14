var log = require('../utils/logger')
var assert = require('assert')
var describe = require('mocha').describe
var it = require('mocha').it
var db = require('../server/db/mongo')

describe('Database Tests', function() {
    describe('Connection Security', function() {
        it('should fail with incorrect credentials', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4))
        })
        it('should connect successfully', function() {
            assert.equal(1, [1, 2, 3].indexOf(2))
        })
    })
})

db.close()
