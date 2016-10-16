/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var authorsRouter = express.Router();

  const fixtures = [
    {
      id: 1,
      name: 'Ursula K. Le Guin',
      books: [1, 2]
    },
    {
      id: 2,
      name: 'Frederik Pohl',
      books: [3]
    }
  ]

  authorsRouter.get('/', function(req, res) {
    res.send({
      'authors': fixtures
    });
  });

  authorsRouter.get('/:id', function(req, res) {
    const item = fixtures.find(i => i.id === parseInt(req.params.id, 10))
    res.send({
      'author': item || null
    });
  });

  app.use('/api/authors', authorsRouter);
};
