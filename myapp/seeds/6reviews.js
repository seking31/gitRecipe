
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {body: 'Lorem ipsum dolor. Sit amet sed sed ut at. Nibh aliquam ornare. Leo posuere sed. Cras eget sed proin et lectus sit egestas elit. Etiam orci mauris. Quis sed vehicula. Volutpat dolor qui viverra morbi suscipit etiam risus nam. Sit integer a mauris elit tellus nam blandit ornare magna proin augue. Vestibulum molestie magna. Vulputate ut suspendisse adipiscing pellentesque vestibulum tincidunt elit faucibus luctus risus cras tempor arcu aliquam sollicitudin lobortis sed. Ac ut quibusdam. Turpis proin parturient enim sit elit sit mauris justo. Fermentum in sit. Proin duis venenatis deserunt suspendisse fringilla nunc proin in. Adipisicing wisi placerat. A malesuada nulla in egestas aliquet ante class volutpat. Pulvinar quisque dignissim. Duis elementum amet integer duis conubia wisi eu augue. Id metus mattis. Vitae molestie dolore vestibulum elit donec. Volutpat porttitor ante. Posuere lectus luctus quis corrupti eget vestibulum odio praesent ut duis mauris. Molestie accumsan elit. Donec necessitatibus neque.', rating: 2},
        {body: 'Hendrerit turpis ligula. Nec dis leo duis fringilla viverra adipiscing eu eget. Sollicitudin non urna odio sed et neque repellendus non. Leo felis ultricies. Sit per lacus. At erat sociis ornare suscipit nunc enim laoreet justo sit amet porta ornare urna ac. Tempor dolor dui. Integer luctus viverra vivamus arcu donec. Euismod sapien aliquam odio et est. Varius malesuada pellentesque.', rating: 5},
        {body: 'Varius morbi ante. Elit eget ullamcorper bibendum id congue. Ornare gravida consectetuer eget neque inceptos. Interdum tellus mauris. Auctor hendrerit arcu. Vestibulum quisque ullamcorper. Nulla porttitor at. Pharetra quam feugiat erat odio sem. Etiam malesuada non. Nullam suspendisse dignissim ac voluptatem morbi orci felis aliquet lorem praesent curabitur. Justo lobortis rutrum sed orci vel in in quisque erat pellentesque vel. Tellus dolores sit. Magna sollicitudin turpis suspendisse sagittis convallis. Dui ultrices volutpat wisi ac elementum consequat magna consectetuer fringilla quis mauris orci risus sed. A leo mauris posuere vel dui.', rating: 4}
      ]);
    });
};
