const express = require('express');
const app = express();
const connectDb = require('./db/connectDb')
const {addNewEmployee, getAllEmployees,deleteEmployee} = require('./controllers/routesFunctions');
const port = process.env.PORT || 5000;
const {body} = require("express-validator");
const {check, validationResult} = require('express-validator')

require('dotenv').config()

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.post('/', addNewEmployee);
app.delete('/', deleteEmployee);
app.get('/allEmployees', getAllEmployees);


const start = async (url) => {
    try {
        await connectDb(url)
        app.listen(port, () => {
            console.log(`listen on port ${port}`)
        })
    } catch (e) {
        console.log(e)
    }
}
start(process.env.DB_URl);
