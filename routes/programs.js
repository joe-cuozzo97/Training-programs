var express = require('express');
var router = express.Router();
const programsCtrl = require('../controllers/programs')

router.get('/', programsCtrl.index)

module.exports = router;
