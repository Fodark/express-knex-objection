
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, content: 'Hello there!', user_id: 1},
        {id: 2, content: 'General Kenobi', user_id: 2},
        {id: 3, content: 'You\'re a bold one', user_id: 1}
      ]);
    });
};
