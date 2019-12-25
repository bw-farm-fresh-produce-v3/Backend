
exports.up = function(knex) {
    return knex.schema.createTable('orders', tbl => {
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
