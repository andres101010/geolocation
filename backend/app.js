var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dbConnection = require("./dataBase/connection");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const geolocationRouter = require('./routes/geolocation');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
      origin: '*',
  }),
);
 //Prueba de conexion de base de datos
dbConnection.connection.connect((err)=>{
  if (err){
    console.log("Error al conectar a la base de datos: "+ err);
  }
  console.log("Conectado exitosamente")
})

dbConnection.connection.on("error",(err)=>{
  console.error('Error en la conexión a la base de datos:', err);
})
dbConnection.connection.on("close",(err)=>{
  console.log('La conexión a la base de datos se cerró');
})

// Routes

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/geolocation', geolocationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
