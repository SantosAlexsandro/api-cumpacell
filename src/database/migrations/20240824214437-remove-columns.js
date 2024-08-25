module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('transactions', 'model_item');
  },

  down: async (queryInterface) => {
    await queryInterface.addColumn('transactions', 'model_item');
  },
};
