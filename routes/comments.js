const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')



router.post('/programs/:id/comments', commentsCtrl.create)


module.exports = router