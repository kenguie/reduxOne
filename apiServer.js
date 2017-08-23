var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

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
