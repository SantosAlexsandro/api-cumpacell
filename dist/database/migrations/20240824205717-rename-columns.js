"use strict";/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Renomeando múltiplas colunas
    await queryInterface.renameColumn('transactions', 'status_transaction', 'transaction_status');
    await queryInterface.renameColumn('transactions', 'receiving_date', 'transaction_arrival_date');
    await queryInterface.renameColumn('users', 'nome', 'entity_first_name');
    await queryInterface.renameColumn('items', 'name_item', 'item_name');
    await queryInterface.renameColumn('items', 'brand', 'item_brand');
    await queryInterface.renameColumn('transactions', 'technical_report', 'transaction_technical_report');
    await queryInterface.renameColumn('transactions', 'defect_description', 'transaction_defect_description');
    await queryInterface.renameColumn('transactions', 'total_service_charge', 'transaction_total_amount');
  },

  down: async (queryInterface, Sequelize) => {
    // Revertendo as mudanças para o estado original
    await queryInterface.renameColumn('transactions', 'transaction_status', 'status_transaction');
    await queryInterface.renameColumn('transactions', 'transaction_arrival_date', 'receiving_date');
    await queryInterface.renameColumn('users', 'entity_first_name', 'nome');
    await queryInterface.renameColumn('items', 'item_name', 'name_item');
    await queryInterface.renameColumn('items', 'item_brand', 'brand');
    await queryInterface.renameColumn('transactions', 'transaction_technical_report', 'technical_report');
    await queryInterface.renameColumn('transactions', 'transaction_defect_description', 'defect_description');
    await queryInterface.renameColumn('transactions', 'transaction_total_amount', 'total_service_charge');
  }
};
