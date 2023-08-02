"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn('items', 'name_teste4', 'name_item');
  },

  async down(queryInterface) {
    await queryInterface.renameColumn('items', 'name_item', 'name_teste4');
  },
};
