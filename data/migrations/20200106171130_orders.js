exports.up = function(knex) {
    return knex.schema.createTable('orders', tbl => {
        tbl.increments()
        tbl.timestamp(true, true)

        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('orders')
};
