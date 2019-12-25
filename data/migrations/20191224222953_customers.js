
exports.up = function(knex) {
    return knex.schema.createTable('customers', tbl => {
        // Can have many orders
        // Can have one local
        tbl.increments()
        tbl.timestamps()

        tbl.integer('orders-id')
            .notNullable()
            .references('id')
            .inTable('orders')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.string('username').notNullable()
        tbl.string('password').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('customers')
};