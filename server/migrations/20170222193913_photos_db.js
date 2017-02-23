
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('photos', function(table) {
      table.increments('photo_id').primary();
      table.bigInteger('album_id').notNullable();
      table.foreign('album_id').references('albums.album_id');
      table.string('name');
      table.string('description');
      table.date('file_location').notNullable().unique();
      table.specificType('latitude', 'double precision');
      table.specificType('longitude', 'double precision');
      table.specificType('status', 'smallint').notNullable().comment('-1: banned, 0: inactive, 1: active, 2: deactivated, 3: deleted');
      table.timestamps();
    })
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('photos')
  ])  
};
