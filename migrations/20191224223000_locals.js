
exports.up = function(knex) {
    return knex.schema.createTable('locals', tbl => {
        // Locals can have many customers. 
        // Can have many products from different farmers, but only one of each
        // farmer's products. UNIQUE CONSTAINT
        tbl.increments()

        tbl.integer('customers-id').notNullable()
        tbl.integer('farmer-product-id').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('locals')
};
