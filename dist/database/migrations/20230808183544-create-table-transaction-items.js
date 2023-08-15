"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaction_items', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'items',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      unit_price_at_transaction: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      total_price: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      discount: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      tax: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('transaction_items');
  },
};
