"use strict";module.exports = {
  up: async (queryInterface) => {
    await queryInterface.renameTable('users', 'entities');
  },

  down: async (queryInterface) => {
    await queryInterface.renameTable('entities', 'users');
  },
};
