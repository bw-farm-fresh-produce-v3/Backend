
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          shop_id: 1,
          name: "blueberries",
          unit: "lbs",
          price: 5.0,
          available: true,
          description: "organic non GMO blueberries",
          deleted_at: null
        },
        {
          shop_id: 1,
          name: "strawberries",
          unit: "lbs",
          price: 3.0,
          available: true,
          description: "organic non GMO strawberries",
          deleted_at: null
        },
        {
          shop_id: 2,
          name: "pineapples",
          unit: "lbs",
          price: 6.0,
          available: true,
          description: "organic non GMO pineapples",
          deleted_at: null
        },
      ]);
    });
};
