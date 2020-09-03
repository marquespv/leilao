
exports.up = function(knex) {
    return knex.schema.createTable('leilao', function(table){
        table.increments('leilaoId');
        table.string('desc').notNullable();
        table.decimal('valorIni').notNullable();
        table.string('dtIni').notNullable();
        table.string('dtFim').notNullable();
        table.string('itemUsado',1).notNullable();
        table.integer('usuarioId').notNullable();

        table.foreign('usuarioId').references('usuarioId').inTable('usuario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('leilao');
};
