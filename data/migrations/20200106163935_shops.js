exports.up = function(knex) {
    return knex.schema.createTable('shops', tbl => {
        tbl.increments()
        tbl.timestamp(true, true)

        tbl.datetime('verified_at')

        tbl.integer("user_id")
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")

        tbl.text('title').notNullable()
        tbl.text('description')
        tbl.text('image_url')

        tbl.text('city').notNullable()
        tbl.text('state').notNullable()
        tbl.integer('zip').notNullable()
        tbl.text('street')
        tbl.float('latitude')
        tbl.float('longitude')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('shops')
};
