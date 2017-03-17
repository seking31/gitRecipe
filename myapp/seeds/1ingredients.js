
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return  knex('ingredients').del()
  .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'eggs'},
        {name: 'cold water'},
        {name: 'ice'},
        {name: 'tomatoes'},
        {name: 'salt'}
      ]);
    });
};
