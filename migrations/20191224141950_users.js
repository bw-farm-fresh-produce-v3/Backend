
exports.up = function(knex) {
    tbl.increments()
    tbl.timestamps(true, true)
    tbl.string('username', 18).notNullable().unique()
    tbl.string('email')
    tbl.string('password', 64).notNullable()
};

exports.down = function(knex) {
  return knex.schema.removeTableIfExists('users')
};
