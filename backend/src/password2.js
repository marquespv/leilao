var crypto = require('crypto');


function gerarSalt(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex')
            .slice(0,16); 
};

function sha512(senha, salt){
    var hash = crypto.createHmac('sha512', salt); // Algoritmo de cripto sha512
    hash.update(senha);
    var hash = hash.digest('hex');
    return {
        salt,
        hash,
    }
};


function gerarSenha(senha) {
    var salt = gerarSalt(16); // Vamos gerar o salt
    var senhaESalt = sha512(senha, salt); // Pegamos a senha e o salt
    // A partir daqui você pode retornar a senha ou já salvar no banco o salt e a senha
    console.log('Senha Hash: ' + senhaESalt.hash);
    console.log('Salt: ' + senhaESalt.salt);
    return ({"hash" : senhaESalt.hash, "salt": salt });
    
};

function login(senhaDoLogin, saltNoBanco, hashNoBanco) {
    var senhaESalt = sha512(senhaDoLogin, saltNoBanco)
    return hashNoBanco === senhaESalt.hash;
 };



module.exports = {
    login,
    gerarSenha,
};