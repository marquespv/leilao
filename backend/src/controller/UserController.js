const crypto = require('crypto');
const cifraSenha = require('../password2');

const connection = require('../database/connection');

module.exports = {

    async index(request,response) {
        const usuario = await connection('usuario').select('*');
        return response.json(usuario);
    },


    

    async create(request, response ){
    
        const {nome, login, senha, salt, tipo, status} = request.body;
     
        try {

        const [usuarioId] =  await connection('usuario').insert({
            nome,
            login, 
            senha, 
            salt,
            tipo, 
            status, 
            
        })
        return response.json({usuarioId});
        } catch (err) {

            return response.status(400).send({error : 'Registration failed'});
        }

    }


};

    