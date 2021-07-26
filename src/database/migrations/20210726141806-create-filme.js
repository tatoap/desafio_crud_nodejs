'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('filmes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
          type: Sequelize.STRING,
          allowNull: false
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano_lancamento: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },{
      timestamps: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('filmes');
  }
};
