var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../knex.js');



router.post('/', function(req, res){

    knex('steps').insert({
      body: req.body.body,
      step_number: req.body.step_number,
      recipe_id: req.body.recipe_id

    }).then(function(result){
      res.json(result);
    });
  });

  router.post('/:id', function(req, res){

    knex('steps').insert({
      body: req.body.body,
      step_number: req.body.step_number,
      recipe_id: req.body.recipe_id
    }).then(function(result){
      res.json(result);
    });

  });


router.get('/', function(req, res){

  knex('steps').select().then(function(result){

    res.json(result);
  });

});




router.get('/:id', function(req, res){
  knex('steps').where('id', req.params.id).first().then(function(result){
    res.json(result);
  });

});

router.put('/:id', function(req, res){

  knex('steps').where('id', req.params.id).update({
    body: req.body.body,
    step_number: req.body.step_number

  }).then(function(result){
    res.json(result);
  });

});


router.delete('/:id', function(req, res){

  knex('steps').where('id', req.params.id).del().then(function(result){
    res.json(result);
  });

});




module.exports = router;
