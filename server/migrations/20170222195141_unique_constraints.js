
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.string('email').notNullable().alter();
      table.unique('email')
      table.string('password').notNullable().alter();
      table.unique('handle');
    })
  ])  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.string('email').nullable().alter();
      table.dropUnique('email');
      table.string('password').nullable().alter();
      table.dropUnique('handle');
    })
  ])  
};
