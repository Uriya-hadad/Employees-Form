const express = require('express')
const router = express.Router()
const {getHello,clearDb} = require('../controllers/routesFunctions');
router.route('/').post(getHello).delete(clearDb);

module.exports = router;