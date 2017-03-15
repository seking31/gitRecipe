
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {body: 'Preheat oven to 200 degrees F (95 degrees C).', step_number: 1, recipe_id: knex('recipes').where('name', 'Sun-dried Tomatoes').select('id')},

        {body: 'Wash and halve tomatoes. Gently squeeze out the seeds. Place the tomatoes on a non-stick cookie sheet, and sprinkle with salt to taste.', step_number: 2, recipe_id: knex('recipes').where('name', 'Sun-dried Tomatoes').select('id')},

        {body: 'Bake until tomatoes take on a leathery texture. This could literally take all day; smaller pieces will require less oven time.', step_number: 3, recipe_id: knex('recipes').where('name', 'Sun-dried Tomatoes').select('id')},

        {body: 'Place eggs in pot, cover with enough water to rise 2" above the eggs.', step_number: 1, recipe_id: knex('recipes').where('name', 'Easy Peeling Boiled Eggs').select('id')},

        {body: 'Place over high heat and bring to a boil, uncovered.', step_number: 2, recipe_id: knex('recipes').where('name', 'Easy Peeling Boiled Eggs').select('id')},

        {body: 'Set the timer for 8 mins', step_number: 3, recipe_id: 2},
        {body: 'Drain, rinse with cold water, drain again.', step_number: 4, recipe_id: knex('recipes').where('name', 'Easy Peeling Boiled Eggs').select('id')},
      ]);
    });
};
