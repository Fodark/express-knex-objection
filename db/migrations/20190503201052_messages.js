
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', t => {
      t.increments('id')
      t.string('content')
      t.integer('user_id').references('id').inTable('users')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
};
