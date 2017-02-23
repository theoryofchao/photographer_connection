
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.specificType('status', 'smallint').notNullable().comment('-1: banned, 0: inactive, 1: active, 2: deactivated, 3: deleted');
    })
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.dropColumn('status');
    })
  ]) 
};
