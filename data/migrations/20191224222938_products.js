
exports.up = function(knex) {
    return knex.schema.createTable('products', tbl => {
        // Can have many farmers 
        // Can have many orders
        // Can have many locals
        tbl.increments()
        tbl.timestamps()

        tbl.string('name').notNullable()
        tbl.boolean('available').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products')
};
