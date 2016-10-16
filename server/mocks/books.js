/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var booksRouter = express.Router();

  const fixtures = [
    {
      id: 1,
      title: 'The Left Hand of Darkness',
      year: 1969,
      author: 1
    },
    {
      id: 2,
      title: 'The Dispossessed',
      year: 1974,
      author: 1
    },
    {
      id: 3,
      title: 'Gateway',
      year: 1977,
      author: 2
    }
  ]

  booksRouter.get('/', function(req, res) {
    res.send({
      'books': fixtures
    });
  });

  booksRouter.get('/:id', function(req, res) {
    const item = fixtures.find(i => i.id === parseInt(req.params.id, 10))
    res.send({
      'book': item || null
    });
  });

  app.use('/api/books', booksRouter);
};
