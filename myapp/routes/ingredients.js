
var express = require('express');
var app = express();
var router = express.Router();
var knex = require('./db');


router.post('/', function(req, res){
//req is array of strings, break them up to be posted, for each insert it 
  knex('ingredients').insert({

    name: req.body.name

  }).then(function(result){
    res.json(result);
  });

});



router.get('/', function(req, res){

  knex('ingredients').select().then(function(result){
    res.json(result);
  });

});



router.get('/:id', function(req, res){
  knex('ingredients').where('uid', req.params.id).first().then(function(result){
    res.json(result);
  });

});

router.put('/:id', function(req, res){

  knex('ingredients').where('uid', req.params.id).update({
    name: req.body.name
  }).then(function(result){
    res.json(result);
  });

});

router.delete('/:id', function(req, res){

  knex('ingredients').where('uid', req.params.id).del().then(function(result){
    res.json(result);
  });

});




module.exports = router;
