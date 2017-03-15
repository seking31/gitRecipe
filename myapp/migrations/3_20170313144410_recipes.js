
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('recipes', function(table) {
            table.increments('id').primary();
            table.string('name');
            table.integer('user_id').references('id').inTable('users');
            table.string('url');
          })
        ])
    };

exports.down = function(knex, Promise) {
  return Promise.all([
       knex.schema.dropTable('recipes')

   ])
};
//fk only lives on crows feet side
//id, name, user_id, ingredients_id
