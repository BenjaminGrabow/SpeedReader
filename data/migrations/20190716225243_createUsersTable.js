exports.up = function(knex) {
  return knex.schema.createTable('memoryGame', table => {
    table.increments();
    table.text('frontPicture', 100).notNullable();
    table.text('backPicture', 100).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('memoryGame');
};