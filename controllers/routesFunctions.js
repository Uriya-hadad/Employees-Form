const templates = require('../db/model')

const addNewEmployee = async (req, res) => {
    try {
        const {id, name, address, email} = req.body;
        const valid = id.length === 9 && !/[^A-Za-z ]/.test(name) && !/[^0-9]/.test(id);
        if (valid) {
            const find = await templates.findOne({id});
            if (!find) {
                const result = await templates.create({id, name, address, email});
                return res.status(200).json({success: true, valid});
            }
        }
        return res.status(200).json({success: false, valid});
    } catch (e) {
        res.status(500).send("something went wrong...")
    }
}

const getAllEmployees = async (req, res) => {
    try {
        const result = await templates.find({});
        res.status(200).json(result)
    } catch (e) {
        res.status(500).send("something went wrong...")
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const id = req.body.id;
        const result = await templates.findOneAndDelete({id});
        res.status(200).json(result);
    } catch (e) {
        res.status(500).send("something went wrong...");
    }
}
module.exports = {deleteEmployee, addNewEmployee, getAllEmployees}