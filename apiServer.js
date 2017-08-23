var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', index);
// app.use('/users', users);

// APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');

var db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB - connection error: '));

// ---- Sessions begin
app.use(session({
  secret: 'mySecretString',
  saveUninitialized: false,
  resave: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 2}, // 2 days in milliseconds 
  store: new MongoStore({mongooseConnection: db, ttl: 2 * 24 * 60 * 60})
  // ttl 2 days * 24 hrs * 60 min * 60 sec
}));

// save session cart api
app.post('/cart', function(req, res) {
  var cart = req.body;
  req.session.cart = cart;
  req.session.save(function(err) {
    if (err) {
      throw err;
    }
    res.json(req.session.cart);
  })
});

// get session cart api 
app.get('/cart', function(req, res) {
  if (typeof req.session.cart !== 'undefined') {
    res.json(req.session.cart);
  }
});

// ---- Sessions End

var Books = require('./models/books.js');

//-------------- Post Books
app.post('/books', function (req, res) {
  var book = req.body;

  Books.create(book, function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  })
});

//------------ Get Books
app.get('/books', function (req, res) {
  Books.find(function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books)
  })
});

//------------- Remove Books
app.delete('/books/:_id', function (req, res) {
  var query = { _id: req.params._id };

  Books.remove(query, function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  })
});

// END APIs

app.listen(3001, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('API Server is listening on http://localhost:3001');
})
