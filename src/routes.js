const express = require('express');
const ExpectadorController = require('./controller/ExpectadorController');
const FilmeController = require('./controller/FilmeController');

const routes = express.Router();

routes.get('/filmes', FilmeController.listar);
routes.get('/filmes/:filmeId', FilmeController.procurarPorId);
routes.post('/filmes', FilmeController.salvar);
routes.put('/filmes/:filmeId', FilmeController.atualizar);
routes.delete('/filmes/:filmeId', FilmeController.excluir);
routes.get('/filmes/:filmeId/expectadores', FilmeController.expectadoresPorFilme);

routes.get('/expectadores', ExpectadorController.listar);
routes.get('/expectadores/:expectadorId', ExpectadorController.procurarPorId);
routes.post('/expectadores', ExpectadorController.salvar);
routes.put('/expectadores/:expectadorId', ExpectadorController.atualizar);
routes.delete('/expectadores/:expectadorId', ExpectadorController.excluir);
routes.get('/expectadores/:expectadorId/filmes', ExpectadorController.filmesPorExpectador);
routes.put('/expectadores/:expectadorId/filmes/:filmeId', ExpectadorController.marcarFilmeVisto);

module.exports = routes;