const express = require('express');
const app = express();
const connectDb = require('./db/connectDb')
const router = require("./route/route");
require('dotenv').config()

const port = process.env.PORT || 5000;

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
app.use(router);

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
start(process.env.DB_URl)