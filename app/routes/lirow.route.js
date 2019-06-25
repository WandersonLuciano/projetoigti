var express = require('express')
var router = express.Router()
var lirowController = require('../controllers/lirow.controller');


router.get('/', lirowController.list)

router.get('/:id', lirowController.read)

router.post('/register', lirowController.register)

router.put('/:id', lirowController.update)

router.delete('/:id', lirowController.delete)

module.exports = router
