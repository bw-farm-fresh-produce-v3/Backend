
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.timestamps(true, true)

        tbl.string('username', 18).notNullable().unique()
        tbl.string('email').notNullable()
        tbl.string('password', 64).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
