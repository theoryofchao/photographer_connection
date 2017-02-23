
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('albums', function(table) {
      table.increments('album_id').primary();
      table.bigInteger('user_id').notNullable();
      table.foreign('user_id').references('users.user_id');
      table.string('name');
      table.string('description');
      table.specificType('latitude', 'double precision');
      table.specificType('longitude', 'double precision');
      table.date('start_date');
      table.date('end_date');
      table.specificType('status', 'smallint').notNullable().comment('-1: deleted, 0: hidden, 1: active');
      table.timestamps();
    })
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('albums')
  ]) 
};
