module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estimates', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      receiving_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      name_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name_item: {
        type: Sequelize.STRING,
      },
      brand_item: {
        type: Sequelize.STRING,
      },
      model_item: {
        type: Sequelize.STRING,
      },
      defect_description: {
        type: Sequelize.STRING,
      },
      technical_report: {
        type: Sequelize.STRING,
      },
      status_transaction: {
        type: Sequelize.STRING,
      },
      total_service_charge: {
        type: Sequelize.FLOAT,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('estimates');
  },
};
