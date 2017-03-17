var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var PORT = process.env.PORT || 3000;


var users = require('./routes/users');
var ingredients = require('./routes/ingredients');
var ingredients_recipes = require('./routes/ingredients_recipes');
var recipes = require('./routes/recipes');
var reviews = require('./routes/reviews');
var steps = require('./routes/steps');

var app = express();

//psql is a terminal for postgres, psql is to postgres as bash is to the terminal. knex is written in javascript, both knex and psql send sql to the database. sql is the language to minipulate postgres. postgres only communicates with sql.

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//all middleware, logger-logs that requests happened (dev)is for developers so more info/ urlencoded -true supports more complex info

// catch 404 and forward to error handler

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
});

app.use('/users', users);
app.use('/ingredients', ingredients);
app.use('/ingredients_recipes', ingredients_recipes);
app.use('/recipes', recipes);
app.use('/reviews', reviews);
app.use('/steps', steps);
//app.use defines a path that is used in routs

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//if request gets through all routs and does not match, it errors


app.listen(PORT, function () {
  console.log('Example app listening on port!' + PORT)
})

module.exports = app;
