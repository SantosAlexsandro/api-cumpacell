module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('items', 'cod_product', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

};
