const express = require('express');
const ExpectadorController = require('./controller/ExpectadorController');
const FilmeController = require('./controller/FilmeController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Olá mundo')
})

routes.get('/filmes', FilmeController.index);
routes.get('/filmes/:filmeId', FilmeController.findById);
routes.post('/filmes', FilmeController.save);
routes.delete('/filmes/:filmeId', FilmeController.delete);

routes.get('/expectadores', ExpectadorController.index);
routes.get('/expectadores/:expectadorId', ExpectadorController.findById);
routes.post('/expectadores', ExpectadorController.save);
routes.delete('/expectadores/:expectadorId', ExpectadorController.delete);

module.exports = routes;