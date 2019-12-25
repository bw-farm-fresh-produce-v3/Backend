
exports.up = function(knex) {
    return knex.schema.createTable('products', tbl => {
        tbl.increments()
        tbl.timestamps()

        tbl.string('name').notNullable()
        tbl.boolean('available').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products')
};
