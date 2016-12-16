/*eslint no-unused-vars: 0 */
var log = require.main.require('utils/logger')
var describe = require('mocha').describe
var it = require('mocha').it
var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')
var server = require('../server')
var config = require('config')

chai.use(chaiHttp)

log.debug(JSON.stringify(config))

/*
 * Test the Food routes
 */
describe('FoodApi', function () {
    describe('GET /api/phase', function () {
        it('it should GET all foods in phase', function (done) {
            chai.request(server).get('/api/phase').query({
                phase: 7
            }).end(function (err, res) {
                res.should.have.status(200)
                res.body.should.have.property('phase')
                res.body.phase.should.equal('7')
                done()
            })
        })
    })

    describe('GET /api/foodlist/count', function () {
        it('it should GET food count', function (done) {
            chai.request(server).get('/api/foodlist/count').end(function (err, res) {
                res.should.have.status(200)
                res.body.should.have.property('count')
                res.body.count.should.equal(1)
                done()
            })
        })
    })

    describe('GET /api/foods/search', function () {
        it('it should GET food by search criteria', function (done) {
            chai.request(server).get('/api/foods/search?').query({
                name: 'food'
            }).end(function (err, res) {
                res.should.have.status(200)
                res.body.should.have.property('foodName')
                res.body.foodName.should.equal('food')
                done()
            })
        })
    })

    describe('GET /api/food', function () {
        it('it should GET food by ID', function (done) {
            chai.request(server).get('/api/foods/search').query({
                id: '1'
            }).end(function (err, res) {
                res.should.have.status(200)
                res.body.should.have.property('id')
                res.body.id.should.equal(1)
                done()
            })
        })
    })

    describe('POST /api/food', function () {
        it('it should POST a food ', function (done) {
            var food = {
                id: 1
            }
            chai.request(server).post('/api/food').field('id', 1).send(food).end(function (err, res) {
                res.should.have.status(200)
                res.body.should.have.property('food')
                done()
            })
        })
    })
})