var express = require('express');
var router = express.Router();
const programsCtrl = require('../controllers/programs')
const isLoggedIn = require('../config/auth')



router.get('/', programsCtrl.index)
router.get('/new', isLoggedIn, programsCtrl.new)
router.get('/:id', programsCtrl.show)
router.get('/programs/:id/edit', programsCtrl.edit)
router.post('/', programsCtrl.create)
router.delete('/:id', isLoggedIn, programsCtrl.delete)
router.put('/:id', isLoggedIn, programsCtrl.update)


module.exports = router;
