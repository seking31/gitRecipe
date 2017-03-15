
var express = require('express');
var app = express();
var router = express.Router();
var knex = require('./db');


router.post('/', function(req, res){

  knex('recipes').insert({

    name: req.body.name

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
  knex('recipes').where('uid', req.params.id).first().then(function(result){
    res.json(result);
  });

});

router.put('/:id', function(req, res){

  knex('recipes').where('uid', req.params.id).update({
    name: req.body.name
  }).then(function(result){
    res.json(result);
  });

});

router.delete('/:id', function(req, res){

  knex('recipes').where('uid', req.params.id).del().then(function(result){
    res.json(result);
  });

});




module.exports = router;
