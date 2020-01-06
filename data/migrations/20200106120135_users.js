exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.timestamps(true, true)

        tbl.text('email').notNullable().unique()
        tbl.text('password_hash', 64).notNullable()
        tbl.text('first_name')
        tbl.text('last_name')
        tbl.text('city')
        tbl.text('state')
        tbl.integer('zip')
        tbl.float('latitude')
        tbl.float('longitude')
        tbl.boolean('owns_shop').defaultTo(false)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
