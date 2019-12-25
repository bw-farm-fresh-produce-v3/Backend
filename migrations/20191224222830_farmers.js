
exports.up = function(knex) {
  return knex.schema.createTable('farmers', tbl => {
    // Can have many orders
    // Can have many products
    tbl.increments()                          

    tbl.string('username')                    
        .unique('')
        .notNullable()                                                           
    tbl.string('password').notNullable()      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('')
};
