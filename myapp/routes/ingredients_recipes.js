var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../knex.js');


router.post('/', function(req, res){

  knex('ingredients_recipes').insert({
    ingredients_id: req.body.ingredients_id,
    recipe_id: req.body.recipe_id,
    quantity: req.body.quantity
  }).then(function(result){
    res.json(result);
  });
});



router.get('/', function(req, res){

  knex('ingredients_recipes').select().then(function(result){
    res.json(result);
  });
});



router.get('/:id', function(req, res){
  knex('ingredients_recipes').where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});

router.put('/:id', function(req, res){

  knex('ingredients_recipes').where('id', req.params.id).update({
    quantity: req.body.quantity
  })
  .returning('id')
  .then(function(result){
    res.json(result);
  });
});

router.delete('/:id', function(req, res){

  knex('ingredients_recipes').where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});




module.exports = router;
