const Sequelize = require('sequelize')
const dbConfig = require('../config/database');
const Expectador = require('../model/expectador');
const Filme = require('../model/filme');

const connection = new Sequelize(dbConfig)

Filme.init(connection);
Expectador.init(connection);

module.exports = connection;