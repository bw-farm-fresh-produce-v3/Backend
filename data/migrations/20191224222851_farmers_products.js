
exports.up = function(knex) {
    return knex.schema.createTable('farmers-products', tbl => {
        // Each farmer's prodcuts
        // Can have many farmers
        // Can only have 1 local UNIQUE CONSTRAINT
        // Can have many (repeat) products
        tbl.increments()
        tbl.timestamps(true, true)

        tbl.integer('farmer_id')
            .notNullable()
            .references('id')
            .inTable('farmers')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('products_id')
            .notNullable()
            .references('id')
            .inTable('products')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.string('local').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('farmers-products')
};
