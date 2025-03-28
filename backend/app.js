const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const route = require('./cRoutes')
const app = express(); 
const session = require('express-session')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const flash = require('connect-flash')
require('dotenv').config() 
const Handlebars = require('handlebars');
const PORT = 3001;
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.engine('hbs', handlebars.engine({
  extname: '.hbs', 
  defaultLayout: 'main-layout',
  helpers: {
    calculateProductPrice: (a, b) => (a * b).toFixed(2),
    allCaps: (text) => 
    { 
      if (typeof text === 'string') 
     {
      return text.toUpperCase() } 
    return text 
    },
    formatNumber: (num) => num.toFixed(2)
  }

}))  


// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs'); 


app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//connect to database 
mongoose.connect(process.env.DATABASE_URL, 
  {useNewUrlParser: true, useUnifiedTopology: true}).then(function() {
      console.log("Successfully connected to the database");    
  }).catch(function(err) {
      console.log('Could not connect to the database. Exiting now...', err);
      process.exit();
  });


route(app)


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

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})
module.exports = app;
