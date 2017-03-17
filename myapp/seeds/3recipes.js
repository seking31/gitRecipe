
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Sun-dried Tomatoes', url:'https://goo.gl/dRBoZb',
        user_id: knex('users').where('name', 'Jim').select('id') },


        {name: 'Easy Peeling Boiled Eggs', url:'https://goo.gl/Za4ncG', user_id: knex('users').where('name', 'Jill').select('id')
        }
      ]);
    });
};
