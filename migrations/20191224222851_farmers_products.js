
exports.up = function(knex) {
    return knex.schema.createTable('farmers-products', tbl => {
        tbl.increments()
        tbl.timestamps(true, true)

        tbl.integer('farmer_id').notNullable()
        tbl.integer('products_id').notNullable()
        tbl.string('local').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('farmers-products')
};
