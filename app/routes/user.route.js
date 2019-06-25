var express = require('express')
var router = express.Router()
var userController = require('../controllers/user.controller');


router.get('/', userController.list)

router.get('/:id', userController.read)

router.post('/register', userController.register)

router.put('/:id', userController.update)

router.delete('/:id', userController.delete)

module.exports = router
