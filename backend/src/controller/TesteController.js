const geraSenha = require('../password2');

function imprime(request, response) {
const minhaSenha = "12345";
const meuHash = geraSenha.gerarSenha(minhaSenha);

return response.json(meuHash);

};

module.exports = {
    imprime
};    