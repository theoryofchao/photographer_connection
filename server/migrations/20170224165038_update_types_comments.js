
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('photos', function (table) {
      table.string('file_location').notNullable().alter();
      table.specificType('status', 'smallint').notNullable().comment('-1: deleted, 0: hidden, 1: active').alter();
    })
  ])  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('photos', function (table) {
      table.date('file_location').notNullable().alter();
      table.specificType('status', 'smallint').notNullable().comment('-1: banned, 0: inactive, 1: active, 2: deactivated, 3: deleted').alter();
    })
  ])  
};
