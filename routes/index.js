const express = require('express');

const router=express.Router();
const homeController = require('../controllers/home_controller');
//map
const mapController = require("../controllers/mapController")

console.log('router loaded');


router.get('/',homeController.home);
router.use('/users',require('./users'));
// router.use('/maps',require('./map'))
router.use('/map',mapController().mapKhol)

module.exports = router;


module.exports = router;