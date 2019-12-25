
exports.up = function(knex) {
    return knex.schema.createTable('customers', tbl => {
        tbl.increments()
        tbl.timestamps()

        tbl.integer('orders-id').notNullable()
        tbl.string('username').notNullable()
        tbl.string('password').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('customers')
};
