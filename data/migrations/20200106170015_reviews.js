exports.up = function(knex) {
    return knex.schema.createTable('reviews', tbl => {
        tbl.increments()
        tbl.timestamp(true, true)

        tbl.integer('shop_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('shops')

        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')

        tbl.float('stars').notNullable()
        tbl.text('description')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reviews')
};
