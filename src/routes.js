const express = require('express');
const ExpectadorController = require('./controller/ExpectadorController');
const FilmeController = require('./controller/FilmeController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Olá mundo')
})

routes.get('/filmes', FilmeController.index);
routes.get('/filmes/:filmeId', FilmeController.findById);

routes.get('/expectadores', ExpectadorController.index);
routes.get('/expectadores/:expectadorId', ExpectadorController.findById);

module.exports = routes;