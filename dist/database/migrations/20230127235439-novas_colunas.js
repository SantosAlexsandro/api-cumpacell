"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('items', 'cost_product', {
      type: Sequelize.FLOAT,
    });
    await queryInterface.addColumn('items', 'gross_weight', {
      type: Sequelize.FLOAT,
    });
    await queryInterface.addColumn('items', 'light_weight', {
      type: Sequelize.FLOAT,
    });
    await queryInterface.addColumn('items', 'origin_product', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('items', 'classification_type', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('items', 'situation', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('items', 'type_product', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('items', 'vendor', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('items', 'observation', {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('items', 'cost_product');
    await queryInterface.removeColumn('items', 'gross_weight');
    await queryInterface.removeColumn('items', 'light_weight');
    await queryInterface.removeColumn('items', 'origin_product');
    await queryInterface.removeColumn('items', 'classification_type');
    await queryInterface.removeColumn('items', 'situation');
    await queryInterface.removeColumn('items', 'type_product');
    await queryInterface.removeColumn('items', 'vendor');
    await queryInterface.removeColumn('items', 'observation');
  },
};
