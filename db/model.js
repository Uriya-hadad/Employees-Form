const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    result: {
        type: Number,
        require: [true, 'must provide a number'],
        trim: true,
    }
})

module.exports = mongoose.model("deaeration", taskSchema);