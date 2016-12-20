/*eslint no-unused-vars: 0 */
let describe = require('mocha').describe
let it = require('mocha').it
let chai = require('chai')
let should = chai.should()
let chaiHttp = require('chai-http')
let server = require('../server')
let ObjectID = require('mongodb').ObjectID
let log = require('../utils/logger')
let appConfig = require('../config/appConfig')
let mongo = require('../db/mongo')
var db
chai.use(chaiHttp)

let food1 = { '_id': new ObjectID(), 'name': 'test food 1', 'category': 'Vegetable', 'phase': 7 }
let food2 = { '_id': new ObjectID(), 'name': 'test food 2', 'category': 'Meat', 'phase': 2 }

/*eslint no-process-env:0*/
let options = appConfig.loadConfig(process.env.CONFIG)
log.init(options)
log.debug('Connect to database...')
mongo.connect(options).then(function(database) {
    log.debug('Connection successful')
    db = database
    clearData()
}).catch(function(err) {
    log.error('Error connecting to database: ' + err)
})

function clearData() {
    log.debug('Dropping food collection...')
    db.dropCollection('food').then(function(result) {
        log.debug('Successfully dropped collection')
        closeAndRunTests()
    }).catch(function(err) {
        log.debug('Error dropping collection: ' + err)
        closeAndRunTests()
    })
}

function closeAndRunTests() {
    db.close().then(function(closeResult) {
        log.debug('Successfully closed database: ')
        runTests()
    }).catch(function(err) {
        log.error('Error closing database: ' + err)
    })
}

function runTests() {
    /*
     * Test the Food routes
     */
    describe('FoodApi', function() {
        it('it should POST a food ', function(done) {
            chai.request(server).post('/api/food').send(food1).end(function(err, res) {
                res.should.have.status(201)
                res.body.should.have.property('_id')
                res.body._id.should.equal(food1['_id'])
                done()
            })
        })
        it('it should POST a second food ', function(done) {
            chai.request(server).post('/api/food').send(food2).end(function(err, res) {
                res.should.have.status(201)
                res.body.should.have.property('_id')
                res.body._id.should.equal(food2['_id'])
                done()
            })
        })

        it('it should GET all foods in phase', function(done) {
            chai.request(server).get('/api/phase').query({
                phase: 7
            }).end(function(err, res) {
                res.should.have.status(200)
                res.body.should.have.property('phase')
                res.body.phase.should.equal('7')
                done()
            })
        })

        it('it should GET food count', function(done) {
            chai.request(server).get('/api/food/count').end(function(err, res) {
                res.should.have.status(200)
                done()
            })
        })

        it('it should GET food by search criteria', function(done) {
            chai.request(server).get('/api/foods/search?').query({
                name: 'food'
            }).end(function(err, res) {
                res.should.have.status(200)
                res.body.should.have.property('foodName')
                res.body.foodName.should.equal('food')
                done()
            })
        })

        it('it should GET food by ID', function(done) {
            chai.request(server).get('/api/foods/search').query({
                id: '1'
            }).end(function(err, res) {
                res.should.have.status(200)
                res.body.should.have.property('id')
                res.body.id.should.equal(1)
                done()
            })
        })
    })
}