
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('reviews', function(table) {
            table.increments('id').primary();
            table.text('body');
            table.integer('user_id').references('id').inTable('users');
            table.integer('recipes_id').references('id').inTable('recipes');
            table.integer('rating');
            table.timestamp('created_at').defaultTo(knex.fn.now());
          })
        ])
    };

exports.down = function(knex, Promise) {
  return Promise.all([
       knex.schema.dropTable('reviews')

   ])
};
