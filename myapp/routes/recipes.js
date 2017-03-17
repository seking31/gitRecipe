var express = require('express');
var app = express();
var router = express.Router();
var knex = require('../knex.js');

router.post('/', function(req, res){
var userName = req.body.username
  knex('users')
    .where('name', userName)
    .returning('id')

    .then(function(userID) {

      if (userID.length === 0) {
        knex('users').insert({
          name: req.body.username
        }).returning('id').then(function(newUserID){
          knex('recipes').insert({
              name: req.body.name,
              user_id: parseInt(newUserID),
              url: req.body.url
            })
          .returning('id')
           .then(function(recipe_id){
             res.json(recipe_id);
           });
        })
      }else{
        knex('recipes').insert({
            name: req.body.name,
            user_id: userID[0].id,
            url: req.body.url
          })
        .returning('id')
         .then(function(recipe_id){
           res.json(recipe_id);
         });
      }
    })
});



router.get('/', function(req, res){

    knex('recipes').select()

    .then(function(result){
      res.json(result);
    });

  });

router.get('/:id', function(req, res){
  var id = req.params.id;
  knex('recipes')
  .where('id', id)
  .first()
    .then(function(res1){
      knex('reviews')
      .where('recipe_id', '=', id)
      .avg('rating')
        .then(function(result){
          var recipe = res1;
          recipe.avg = result[0].avg;
          res.json(recipe);
        })
    })
});



router.put('/:id', function(req, res){

  knex('recipes').where('id', req.params.id).update({
    name: req.body.name,
    url: req.body.url
  })
  .then(function(result){
    res.json(result);
  });
});

router.delete('/:id', function(req, res){

  knex('recipes').where('id', req.params.id).del().then(function(result){
    res.json(result);
  });

});




module.exports = router;
