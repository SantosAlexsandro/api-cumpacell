"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('salesorders', 'total_salesorder', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('salesorders', 'total_salesorder');
  },
};
