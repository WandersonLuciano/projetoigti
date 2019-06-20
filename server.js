var express = require('express'),
    mongoose = require('mongoose')


const app = express();
app.use(express.urlencoded({ extended: false }));

var Boxes = require('./public/routes/boxes.js')
var Users = require('./public/routes/users.js')


var mongoDB = 'mongodb://127.0.0.1/dbLirows';
mongoose.connect(mongoDB, { useNewUrlParser: true });

var port = process.env.PORT || 3000


app.use('/boxes', Boxes);
app.use('/users', Users);


app.get('/', function(req, res){
    res.send('App Lirows')
  })

  app.listen(port, function(){
    console.log("App Lirows Executando na Porta: " + port)
})