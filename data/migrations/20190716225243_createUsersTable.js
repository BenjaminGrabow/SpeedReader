exports.up = function (knex) {
  return knex.schema.createTable('texts', table => {
    table.increments();
    table.text('text', 10000).notNullable();
    table.text('name').notNullable()
  })
    .createTable('memory_game', table => {
      table.increments();
      table.text('front_picture', 100).notNullable();
      table.text('back_picture', 100).notNullable();
    })
};


exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('texts')
    .dropTableIfExists('memory_game');
};