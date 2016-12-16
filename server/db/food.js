var log = require.main.require('./utils/logger')
var ObjectID = require('mongodb').ObjectID
var assert = require('assert')

var collection

function init(db) {
    collection = db.collection('food')
    log.debug('food is initialized')
}

function getAllFoods() {
    assert.notEqual(null, collection)
    log.debug('Getting all foods')
    collection.find().toArray(function (err, results) {
        assert.equal(null, err)
        return results
    })
}

function findFoodById(id) {
    assert.notEqual(null, collection)
    log.debug('Finding food with ID: ' + id)
    collection.findOne({
        _id: id
    }, function (err, result) {
        assert.equal(null, err)
        return result
    })
}

function foodCount() {
    assert.notEqual(null, collection)
    log.debug('Food count')
    collection.count(function (err, count) {
        assert.equal(null, err)
        return count
    })
}

function getFoodsByPhase(phase) {
    return searchForFoods({
        phase: phase
    })
}

function searchForFoods(query) {
    assert.notEqual(null, collection)
    assert.notEqual(null, query)
    log.debug('Searching based on query: ' + query)
    collection.find(query).toArray(function (err, results) {
        assert.equal(null, err)
        return results
    })
}

function addFood(food) {
    assert.notEqual(null, collection)
    assert.notEqual(null, food)
    if (food._id === null) {
        food._id = new ObjectID()
    }
    collection.insertOne(food, function (err, insertCount) {
        assert.equal(null, err)
        assert.equal(1, insertCount)
    })
}

function updateFood(food) {
    assert.notEqual(null, collection)
    assert.notEqual(null, food)
    collection.updateOne({
        _id: food._id
    }, food)
}

module.exports.init = init
module.exports.getAllFoods = getAllFoods
module.exports.findFoodById = findFoodById
module.exports.foodCount = foodCount
module.exports.searchForFoods = searchForFoods
module.exports.getFoodsByPhase = getFoodsByPhase
module.exports.addFood = addFood
module.exports.updateFood = updateFood