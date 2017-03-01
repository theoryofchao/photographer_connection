
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.string('location_string');
      table.specificType('years_exp', 'smallint');
      table.string('summary');
      table.string('profile_picture');
    })
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.dropColumn('location_string');
      table.dropColumn('years_exp');
      table.dropColumn('summary');
      table.dropColumn('profile_picture');
    })
  ]) 
};
