var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../knex.js');



router.post('/', function(req, res){

  knex('recipes').insert({

    name: req.body.name,
    user_id: req.body.user_id

  }).then(function(result){
    res.json(result);
  });

});



router.get('/', function(req, res){

  knex('recipes').select().then(function(result){
    res.json(result);
  });

});



router.get('/:id', function(req, res){
  knex('recipes').where('id', req.params.id).first().then(function(result){
    res.json(result);
  });

});

router.put('/:id', function(req, res){

  knex('recipes').where('id', req.params.id).update({
    name: req.body.name,
    user_id: req.body.user_id
  }).then(function(result){
    res.json(result);
  });

});

router.delete('/:id', function(req, res){

  knex('recipes').where('id', req.params.id).del().then(function(result){
    res.json(result);
  });

});




module.exports = router;
