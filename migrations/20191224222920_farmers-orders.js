
exports.up = function(knex) {
    // ---------------------------------------------------
    /** ----------  INTENTIONALLY LEFT BLANK ------------- */
    // -------------------------------------------------------
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('farmers-orders')
};
