const express = require('express')
const router = express.Router()
const {getHello} = require('../controllers/routesFunctions');
router.route('/singUp').post(getHello);

module.exports = router;