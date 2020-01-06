exports.up = function(knex) {
    return knex.schema.createTable('products', tbl => {
        tbl.increments()
        tbl.timestamp(true, true)

        tbl.datetime("deleted_at")

        tbl.integer('shop_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('shops')

        tbl.text('name').notNullable()
        tbl.integer('unit').notNullable()
        tbl.float('price').notNullable()
        tbl.boolean('available').defaultTo(false)
        tbl.text("description")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products')
};
