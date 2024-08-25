"use strict";/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Renomeando múltiplas colunas
    await queryInterface.renameColumn('transactions', 'transaction_arrival_date', 'defected_items_arrival_date');
    await queryInterface.renameColumn('users', 'email', 'entity_email');
    await queryInterface.renameColumn('users', 'password_hash', 'entity_password_hash');
    await queryInterface.renameColumn('users', 'phone', 'entity_phone');
  },

  down: async (queryInterface, Sequelize) => {
    // Revertendo as mudanças para o estado original
    await queryInterface.renameColumn('transactions', 'defected_items_arrival_date', 'transaction_arrival_date');
    await queryInterface.renameColumn('users', 'entity_email', 'email');
    await queryInterface.renameColumn('users', 'entity_password_hash', 'password_hash');
    await queryInterface.renameColumn('users', 'entity_phone', 'phone');
  }
};
