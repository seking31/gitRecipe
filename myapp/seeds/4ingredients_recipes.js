
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_recipes').insert([


        {ingredients_id: knex('ingredients').where('name', '6 eggs').select('id'),
        recipe_id: knex('recipes').where('name', 'Easy Peeling Boiled Eggs').select('id')},

        {ingredients_id: knex('ingredients').where('name', '2-3 cups cold water').select('id'),
        recipe_id: knex('recipes').where('name', 'Easy Peeling Boiled Eggs').select('id')},

        {ingredients_id: knex('ingredients').where('name', '2 cups ice').select('id'),
        recipe_id: knex('recipes').where('name', 'Easy Peeling Boiled Eggs').select('id')},

        {ingredients_id: knex('ingredients').where('name', 'pinch o salt').select('id'),
        recipe_id: knex('recipes').where('name', 'Sun-dried Tomatoes').select('id')},

        {ingredients_id: knex('ingredients').where('name', '4 pounds tomatoes').select('id'),
        recipe_id: knex('recipes').where('name', 'Sun-dried Tomatoes').select('id')}

      ]);
    });
};
