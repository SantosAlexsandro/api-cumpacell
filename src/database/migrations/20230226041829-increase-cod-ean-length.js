module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('items', 'cod_ean', {
      type: Sequelize.BIGINT,
      allowNull: true,
      validate: {
        max: {
          args: 9999999999999,
          msg: 'O EAN deve ter no máximo 13 dígitos.',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('items', 'cod_ean', {
      type: Sequelize.BIGINT,
      allowNull: true,
    });
  },
};
