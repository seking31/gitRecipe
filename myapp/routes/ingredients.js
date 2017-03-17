var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../knex.js');



router.post('/', function(req, res){

    knex('ingredients').insert({

      name: req.body.name

    })
    .returning('id')
    .then(function(result){
      res.json(result);
    });
  });




router.get('/', function(req, res){

  knex('ingredients').select().then(function(result){
    res.json(result);
  });

});



router.get('/:id', function(req, res){
  knex('ingredients').where('id', req.params.id).first().then(function(result){
    res.json(result);
  });

});

router.put('/:id', function(req, res){

  knex('ingredients').where('id', req.params.id).update({
    name: req.body.name
  }).then(function(result){
    res.json(result);
  });

});

router.delete('/:id', function(req, res){

  knex('ingredients').where('id', req.params.id).del().then(function(result){
    res.json(result);
  });

});




module.exports = router;
