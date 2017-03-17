
exports.up = function(knex, Promise) {
  return Promise.all([
        knex.schema.createTable('steps', function(table) {
            table.increments('id').primary();
            table.string('body');
            table.integer('step_number');
            table.integer('recipe_id').references('id').inTable('recipes')

          })
        ])
    };

exports.down = function(knex, Promise) {

  return Promise.all([
       knex.schema.dropTable('steps')
   ])
};
