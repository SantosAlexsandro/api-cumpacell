"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_sales_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cod_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qty_product: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      product_unit_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      product_cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      total_product_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
    await queryInterface.dropTable('order_products');
  },
};
