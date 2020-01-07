
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function () {
      // Inserts seed entries
      return knex('shops').insert([
        {
          user_id: 1,
          title: "John's Farm",
          city: 'Miami',
          state: 'Florida',
          zip: 12322,
          street: "123 Farmer's Way",
          description: "We sell the freshest produce.",
          image_url: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
          latitude: 1341134432.4321,
          longitude: 3253241.342132
        },
        {
          user_id: 2,
          title: "Steve's Farm",
          city: 'Miami',
          state: 'Florida',
          zip: 12322,
          street: "123 Farmer's Way",
          description: "We sell the freshest produce.",
          image_url: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
          latitude: 1341134432.4321,
          longitude: 3253241.342132
        },
        {
          user_id: 3,
          title: "Bob's Farm",
          city: 'Miami',
          state: 'Florida',
          zip: 12322,
          street: "123 Farmer's Way",
          description: "We sell the freshest produce.",
          image_url: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
          latitude: 1341134432.4321,
          longitude: 3253241.342132
        },
      ]);
    });
};
