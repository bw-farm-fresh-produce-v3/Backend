
exports.up = function(knex) {
    return knex.schema.createTable('farmers-products', tbl => {
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
