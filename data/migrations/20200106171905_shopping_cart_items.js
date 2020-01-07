exports.up = function(knex) {
    return knex.schema.createTable('shopping_cart_items', tbl => {
        tbl.increments()
        tbl.timestamp(true, true)

        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        tbl.integer('product_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('products')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")

        tbl.integer('quantity').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('shopping_cart_items')
};
