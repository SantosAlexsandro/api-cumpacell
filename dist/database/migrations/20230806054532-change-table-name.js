"use strict";module.exports = {
  up: async (queryInterface) => {
    await queryInterface.renameTable('estimates', 'transactions');
  },

  down: async (queryInterface) => {
    await queryInterface.renameTable('transactions', 'estimates');
  },
};
