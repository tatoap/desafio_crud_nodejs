'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('filme_expectadors', {
      filme_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      expectador_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
      }
    },{
      timestamps: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('filme_expectadors');
  }
};
