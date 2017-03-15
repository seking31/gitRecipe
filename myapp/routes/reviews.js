var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../knex.js');



router.post('/', function(req, res){

  knex('reviews').insert({
    body: req.body.body,
    user_id: req.body.user_id,
    recipe_id: req.body.recipe_id,
    rating: req.body.rating
  }).then(function(result){
    res.json(result);
  });

});


router.post('/:id', function(req, res){

  knex('comments').insert({
    aurthor_id: req.params.id,
    body: req.body.body
  }).then(function(result){
    res.json(result);
  });

});


router.get('/', function(req, res){

  knex('reviews').select().then(function(result){
    res.json(result);
  });

});



router.get('/:id', function(req, res){
  knex('reviews').where('id', req.params.id).first().then(function(result){
    res.json(result);
  });

});

router.put('/:id', function(req, res){

  knex('reviews').where('id', req.params.id).update({
    body: req.body.body,
    user_id: req.body.user_id,
    recipe_id: req.body.recipe_id,
    rating: req.body.rating
  }).then(function(result){
    res.json(result);
  });

});

router.delete('/:id', function(req, res){

  knex('reviews').where('id', req.params.id).del().then(function(result){
    res.json(result);
  });

});




module.exports = router;
