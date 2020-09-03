const express = require('express');
const routes = express.Router();




const AuctionController = require('./src/controller/AuctionController');
const UserController = require('./src/controller/UserController');
const TesteController = require('./src/controller/TesteController');
const SessionController = require('./src/controller/SessionController');

routes.post('/auction/new', AuctionController.create);
routes.post('/user/register', UserController.create);
routes.get('/user', UserController.index);
routes.post('logout', SessionController.logout);
routes.get('/teste', TesteController.imprime);
/*routes.get('/testaLogin', UserController.verificaLogin);*/
routes.get('/session', SessionController.authenticate);

module.exports = routes;