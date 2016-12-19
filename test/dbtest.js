// Babel ES6/JSX Compiler
require('babel-core/register')
let log = require('../utils/logger')
let describe = require('mocha').describe
let it = require('mocha').it
let chai = require('chai')
let expect = chai.expect
let db = require('../db/mongo')
let chaiAsPromised = require('chai-as-promised')
let appConfig = require('../config/appConfig')

chai.use(chaiAsPromised)

/*eslint no-process-env:0*/
let options = appConfig.loadConfig(process.env.CONFIG)
log.init(options)

log.debug(JSON.stringify(options))

describe('Database Tests', function () {
    describe('Connection', function () {
        it('should connect successfully', function () {
            return expect(Promise.resolve(db.connect.bind(db, options))).to.eventually.not.throw(Error)
        })
        db.close()
    })
})