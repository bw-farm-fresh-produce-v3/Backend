
exports.up = function(knex) {
    // Unnecessary because we can search for their 
    // orders through their product id (JOIN)
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('farmers-orders')
};
