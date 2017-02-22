
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('user_id').primary();
      table.string('email');
      table.string('password');
      table.string('handle');
      table.string('first_name');
      table.string('last_name');
      table.timestamps();
    })
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])  
};
