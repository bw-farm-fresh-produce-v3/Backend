exports.up = function(knex) {
    return knex.schema.createTable('favorite_shops', tbl => {
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
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('favorite_shops')
};
