exports.up = function(knex) {
    return knex.schema.createTable('order_items', tbl => {
        tbl.increments()
        tbl.timestamp(true, true)

        tbl.integer('order_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('orders')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        tbl.integer('product_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('products')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        tbl.integer('shop_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('shops')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        
        tbl.integer('quantity').notNullable()
        tbl.float('price').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('order_items')
};
