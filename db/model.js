const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    id: {
        type: String,
        require: [true, 'you must provide an id'],
        Numeric: true,
        trim: true,
    },
    name: {
        type: String,
        require: [true, 'you must provide a name'],
        trim: true
    },
    address: {
        type: String,
        require: [true, 'you must provide an address'],
    },
    email: String
});

module.exports = mongoose.model("deaeration", taskSchema);