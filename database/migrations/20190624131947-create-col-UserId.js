'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'lirows',
      'userId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('lirows', 'userId')
  }
};
