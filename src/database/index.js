const Sequelize = require('sequelize')
const dbConfig = require('../config/database');
const Expectador = require('../model/Expectador');
const Filme = require('../model/Filme');

const connection = new Sequelize(dbConfig)

Filme.init(connection);
Expectador.init(connection);

module.exports = connection;