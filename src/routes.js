const express = require('express');
const ExpectadorController = require('./controller/ExpectadorController');
const FilmeController = require('./controller/FilmeController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Olá mundo')
})

routes.get('/filmes', FilmeController.index);

routes.get('/expectadores', ExpectadorController.index);

module.exports = routes;