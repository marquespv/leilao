
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const connection = require('../database/connection');



    function logout(request, response) {
        return response.json({ auth: false, token: null })
    };

    async function verificaLogin(request, response) {
        /* confere se login existe no banco e retorna login e id do usuario */

        const { login } = request.body;

        const userLogin = await connection('usuario')
            .where('login', login)
            .select('login', 'usuarioId').first();

        if (!userLogin) {
            return response.status(400).json({ error: 'Login not registered' });
        }
        return response.json(userLogin);
        /*retorna login e id do usuario*/
    };

    function authenticate(request, response) {
        /*verifica se login e senha conferem e retorna token*/

        const { login, password } = request.body;
        
        const token = 'paulo123456Hash';

        /*
        console.log(login);
        console.log(password);
        console.log(token);
        response.json({login, password, token});
        */

        //response.json(request.body);
        //console.log(request.body.login);
        const auth = verificaLogin(login);

        response.json(auth);

        //        const token = jwt.sign({id: auth.[1]}, authConfig.secret, {
        //            expiresIn: 600,

        /*
        if (!auth) {
            return response.status(400).json({ error: 'Token not authenticated' });
        }
        return response.json({ auth: true, token: { token } });
        */
    };

module.exports = {
    logout,
    verificaLogin,
    authenticate
};

