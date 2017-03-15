
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return  knex('ingredients').del()
  .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: '6 eggs'},
        {name: '2-3 cups cold water'},
        {name: '2 cups ice'},
        {name: '4 pounds tomatoes'},
        {name: 'pinch o salt'}
      ]);
    });
};
