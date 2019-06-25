var express = require('express')
var router = express.Router()
var boxController = require('../controllers/box.controller');


router.get('/', boxController.list)

router.get('/:id', boxController.read)

router.post('/register', boxController.register)

router.put('/:id', boxController.update)

router.delete('/:id', boxController.delete)

module.exports = router
