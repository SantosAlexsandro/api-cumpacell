"use strict";module.exports = {
  up: async (queryInterface) => {
    await queryInterface.renameColumn('items', 'price', 'price_product');
  },

  down: async (queryInterface) => {
    await queryInterface.renameColumn('items', 'price_product', 'price');
  },
};
