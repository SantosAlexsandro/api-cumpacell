"use strict";module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('transactions', 'name_item');
    await queryInterface.removeColumn('transactions', 'brand_item');
  },

  down: async (queryInterface) => {
    await queryInterface.addColumn('transactions', 'name_item');
    await queryInterface.addColumn('transactions', 'brand_item');
  },
};
