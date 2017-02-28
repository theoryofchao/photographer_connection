require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const knex = require('knex')({
 client: 'pg',
 connection: {
   host : 'localhost',
   user : 'development',
   password : 'development',
   database : 'photographer_connection'
 },
 pool: { min: 0, max: 8 },
 debug: true
});


if(knex) {
  console.log("Connected");

}
else {
  console.log("Connection Failed");
}

const index = require('./routes/index');
const users = require('./routes/users');
const albums = require('./routes/albums');
const photos = require('./routes/photos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// cookie session setup
app.use(cookieSession({
  name: 'session',
  secret: '5m4rt15t',   //TODO: hardcoded will be moved to settings.json later
  maxAge: 60 * 60 * 1000,
  httpOnly : false
}));
//console.log(process.env.JWTSECRET);
//app.set(`superSecret`, pro)
app.set('knex', knex);
app.set('jwt', jwt);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieSession());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/albums', albums);
app.use('/photos', photos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;