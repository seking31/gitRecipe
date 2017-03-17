
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_recipes').insert([

        {ingredients_id: knex('ingredients').where('name', 'eggs').select('id'),
        recipe_id: knex('recipes').where('name', 'Easy Peeling Boiled Eggs').select('id'),
        quantity: '6'},

        {ingredients_id: knex('ingredients').where('name', 'cold water').select('id'),
        recipe_id: knex('recipes').where('name', 'Easy Peeling Boiled Eggs').select('id'),
        quantity: '2-3 cups'},

        {ingredients_id: knex('ingredients').where('name', 'ice').select('id'),
        recipe_id: knex('recipes').where('name', 'Easy Peeling Boiled Eggs').select('id'),
        quantity: '2 cups'},

        {ingredients_id: knex('ingredients').where('name', 'salt').select('id'),
        recipe_id: knex('recipes').where('name', 'Sun-dried Tomatoes').select('id'),
        quantity: 'pinch o'},

        {ingredients_id: knex('ingredients').where('name', 'tomatoes').select('id'),
        recipe_id: knex('recipes').where('name', 'Sun-dried Tomatoes').select('id'),
        quantity: '4 pounds'}

      ]);
    });
};
