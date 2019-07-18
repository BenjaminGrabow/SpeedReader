exports.up = function (knex) {
  return knex.schema.createTable('texts', table => {
    table.increments();
    table.text('text', 10000).notNullable();
    table.text('name').notNullable()
  })
    .createTable('memoryGame', table => {
      table.increments();
      table.text('frontPicture', 100).notNullable();
      table.text('backPicture', 100).notNullable();
    })
};


exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('texts')
    .dropTableIfExists('memoryGame');
};