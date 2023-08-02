"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesorders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name_customer: {
        type: Sequelize.STRING,
      },
      name_salesperson: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discount_salesorder: {
        type: Sequelize.FLOAT,
      },
      addition_salesorder: {
        type: Sequelize.FLOAT,
      },
      payment_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount_received: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      observation_salesorder: {
        type: Sequelize.STRING,
      },
      status_salesorder: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('salesorders');
  },
};
