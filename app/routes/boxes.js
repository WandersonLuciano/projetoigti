var express = require('express')
var router = express.Router()
var Box = require('../models-mongodb/box')


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

  router.get('/', function(req, res){

    var query = req.query

    Box.find(query, function(err, boxes){

        if(err){
            res.status(500).send(err)
        } 
        else {
            res.json(boxes)
        }

    })
  })

  module.exports = router;
