
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('3users', function(table) {
            table.increments('id').primary();
            table.string('name');

        })
      ])
};
//fk only lives on crows feet side
//id, user_id, recipies_id, body, rating

exports.down = function(knex, Promise) {
  return Promise.all([
       knex.schema.dropTable('3users')

   ])
};
