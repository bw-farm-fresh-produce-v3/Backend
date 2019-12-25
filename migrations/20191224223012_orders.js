
exports.up = function(knex) {
    return knex.schema.createTable('orders', tbl => {
        // Can have one customer
        // Can have many farmers
        // Can have many products from different farmers,
        // but only one of each farmer's products
        tbl.increments()
        tbl.timestamps(true, true)

        table.datetime('date', { precision: 6 }).defaultTo(knex.fn.now(6))
        tbl.string('farmer-product-id')
            .notNullable()
            .references('id')
            .inTable('farmers-products')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('orders')
};
