var express = require('express')
var router = express.Router()
var User = require('../../app/models/users')


router.use(function timeLog(req, res, next) {
    console.log('Executando em: ', Date.now());
    next();
  });

  router.get('/', function(req, res){
        res.send("Rota Usuários")
  })

  module.exports = router;
