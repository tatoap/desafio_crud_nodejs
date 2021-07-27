'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('expectador_filmes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      filme_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'filmes',
          key: 'id',
        }
      },
      expectador_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'expectadors',
          key: 'id',
        }
      }
    }, {
      timestamps: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('expectador_filmes');
  }
};