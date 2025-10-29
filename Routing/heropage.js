var express = require('express');
var router = express.Router();
const Spectator = require('../models/FormSchema');
const { getHeroPage } = require('../controllers/tt');

/* GET home page. */
router.post('/add', getHeroPage);
module.exports = router;