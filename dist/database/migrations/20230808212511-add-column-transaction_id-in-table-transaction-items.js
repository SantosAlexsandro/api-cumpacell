"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('transaction_items', 'transaction_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'transactions',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
      ,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('transaction_items', 'transaction_id');
  },
};
