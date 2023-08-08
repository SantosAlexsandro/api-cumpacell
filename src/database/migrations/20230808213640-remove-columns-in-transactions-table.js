module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('transactions', 'name_client');
    await queryInterface.removeColumn('transactions', 'phone');
  },

  down: async (queryInterface) => {
    await queryInterface.addColumn('transactions', 'name_client');
    await queryInterface.addColumn('transactions', 'phone');
  },
};
