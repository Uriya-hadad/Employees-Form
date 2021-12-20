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


module.exports = {getHello}