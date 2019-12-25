
exports.up = function(knex) {
    /** UNNECESSARY cause a tomato can only be in one place at a time.  */
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('local-products')
};
