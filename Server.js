
var express = require('express');
var passport = require('passport');
var path = require('path'); 
var morgan = require('morgan');
var bodyParser =require('body-parser'); 
var favicon = require('serve-favicon'); 
var cookieParser = require('cookie-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose'),
assert = require('assert');  
var home = require('./routes/index');
var Software = require('./routes/Software');
var AI = require('./routes/AI');
var Network = require('./routes/Network');
var company = require('./routes/Company');
var session = require("express-session");
var hostname = 'localhost'; 
var port = 4000;
var app = express();
app.use(session({
  secret : 'ITEHeadStart',
  esave : true,
  saveUninitialized  :true
}))
app.use(passport.initialize());
app.use(passport.session());

var url = 'mongodb://localhost/HeadStart';
mongoose.connect(url,{useMongoClient:true});
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function () {console.log("Connected correctly to server"); });

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'jade'); 
 
app.use(morgan('dev')); 
app.use('/', home); 
app.use('/Software', Software);
app.use('/AI', AI);
app.use('/Network', Network);
app.use('/company',company);
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public'))); 




app.listen(port, hostname, function(){ 
  console.log(`ITE-HeadStart Project Server running at http://${hostname}:${port}/`); 
});
