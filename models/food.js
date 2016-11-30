var mongoose = require('mongoose')

var foodSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
        index: true
    },
    name: String,
    category: String,
    phase: {
        type: Number,
        default: 7
    }
})
module.exports = mongoose.model('Foods', foodSchema)
