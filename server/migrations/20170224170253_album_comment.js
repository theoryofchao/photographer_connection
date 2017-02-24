
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('albums', function (table) {
      table.specificType('status', 'smallint').notNullable().comment('-1: deleted, 0: default, 1: active').alter();
    })
  ])  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('albums', function (table) {
      table.specificType('status', 'smallint').notNullable().comment('-1: deleted, 0: hidden, 1: active').alter();
    })
  ])  
};
