
exports.up = function(knex, Promise) {
  return Promise.all([
        knex.schema.createTable('ingredients', function(table) {
            table.increments('id').primary();
            table.string('name');
          })
        ])
    };

exports.down = function(knex, Promise) {
  return Promise.all([
       knex.schema.dropTable('ingredients')
   ])
};
