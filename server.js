var express = require('express'),
    mongoose = require('mongoose')

const bodyParser = require('body-parser');


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


var Boxes = require('./app/routes/boxes')
var User = require('./app/routes/user')


var mongoDB = 'mongodb://127.0.0.1/dbLirows';
mongoose.connect(mongoDB, { useNewUrlParser: true });

var port = process.env.PORT || 3000


app.use('/boxes', Boxes);
app.use('/users', User);


app.get('/', function(req, res){
    res.send('App Lirows')
  })

  app.listen(port, function(){
    console.log("Backend Executando na Porta: " + port)
})