
exports.up = function(knex, Promise) {

  return Promise.all([
        knex.schema.createTable('ingredients_recipes', function(table) {
        table.integer('ingredients_id').references('id').inTable('ingredients');
        table.integer('recipe_id').references('id').inTable('recipes');
        table.text('quantity');
      })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
       knex.schema.dropTable('ingredients_recipes')
   ])
};
