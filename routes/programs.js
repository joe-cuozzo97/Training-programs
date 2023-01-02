var express = require('express');
var router = express.Router();
const programsCtrl = require('../controllers/programs')

router.get('/', programsCtrl.index)
router.get('/new', programsCtrl.new)
router.post('/', programsCtrl.create)
router.get('/:id', programsCtrl.show)


module.exports = router;
