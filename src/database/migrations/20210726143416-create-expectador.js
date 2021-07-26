'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('expectadors', {
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
      idade: {
          type: Sequelize.INTEGER,
          allowNull: false
      }
    },{
      timestamps: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('expectadors');
  }
};
