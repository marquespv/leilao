
exports.up = function(knex) {
  return knex.schema.createTable('usuario', function(table){
      table.increments('usuarioId');
      table.string('nome').notNullable();
      table.string('login').notNullable();
      table.string('senha').notNullable();
      table.string('salt').notNullable();
      table.string('tipo',1).notNullable();
      table.string('status',1).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario');
};
