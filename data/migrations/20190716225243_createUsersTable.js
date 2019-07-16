exports.up = function(knex) {
  return knex.schema.createTable('texts', table => {
    table.increments();
    table.text('text', 10000).notNullable();
    table.text('name').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('texts');
};