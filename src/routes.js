const express = require('express')

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Olá mundo')
})

module.exports = routes;