var log = require.main.require('utils/logger')
var describe = require('mocha').describe
var it = require('mocha').it
var chai = require('chai')
var expect = chai.expect
var config = require('config')
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

log.debug(JSON.stringify(config))

describe('REST API Tests', function () {
    describe('Connection Security', function () {})
})