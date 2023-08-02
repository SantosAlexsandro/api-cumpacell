"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('salesorders', 'total_salesorder');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('salesorders', 'total_salesorder', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
  },
};
