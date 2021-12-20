const templates = require('../db/model')
const {check, validationResult} = require('express-validator')
const getHello = async (req, res) => {
    const {inputNum: num} = req.body;
    const result = (Number(num) * Number(num));
    try {
        const a = await templates.create({result});
        res.status(200).json(a)
    } catch (e) {
        res.status(500).send("something went wrong...");
    }
}
const clearDb = async (req, res) => {
    try {
        const result = await templates.deleteMany({});
        const count = result.deletedCount
        res.status(200).json({success: true, count});
    } catch (e) {
        res.status(404).json({success: false,count:0});
    }
}

module.exports = {getHello, clearDb}