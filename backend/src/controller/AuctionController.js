//const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(request, response ){
    
        const {desc, valorIni, dtIni, dtFim, itemUsado, usuarioId} = request.body;

        await connection('leilao').insert({
            desc,
            valorIni, 
            dtIni, 
            dtFim, 
            itemUsado, 
            usuarioId,
        }
        )
    return response.json({leilaoId});
    }

};
