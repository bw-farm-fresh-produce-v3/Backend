
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: "john@gmail.com",
          password_hash: "fdsafdsaff213423klr23fsd",
          first_name: "john", 
          last_name: "smith", 
          city: "miami", 
          state: "florida",
          zip: 12322,
          latitude: 414121.12421, 
          longitude: 421412243.4,
          owns_shop: false 
        },
        {
          email: "steve@gmail.com",
          password_hash: "fdsafdsaff213423klr23fsd",
          first_name: "steve", 
          last_name: "smith", 
          city: "san francisco", 
          state: "california",
          zip: 12322,
          latitude: 414121.12421, 
          longitude: 421412243.4,
          owns_shop: false 
        },
        {
          email: "bob@gmail.com",
          password_hash: "fdsafdsaff213423klr23fsd",
          first_name: "bob", 
          last_name: "smith", 
          city: "san francisco", 
          state: "california",
          zip: 12322,
          latitude: 414121.12421, 
          longitude: 421412243.4,
          owns_shop: false 
        },
      ]);
    });
};
