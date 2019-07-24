exports.up = function (knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users
      .string('username', 128)
      .notNullable()
      .unique();
    users.string('password', 128).notNullable();
  })
    .createTable('texts', table => {
      table.increments();
      table.text('text', 10000).notNullable();
      table.text('name').notNullable().unique();
      table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .unique()
      .references("id")
      .inTable("users");
    })
    .createTable('memory_game', table => {
      table.increments();
      table.text('front_picture', 100).notNullable();
      table.text('back_picture', 100).notNullable();
    })
    .createTable('find_words', table => {
      table.increments();
      table.text('word', 50).notNullable();
    })
};


exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('texts')
    .dropTableIfExists('memory_game')
    .dropTableIfExists('find_words');
};