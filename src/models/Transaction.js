import Sequelize, { Model } from 'sequelize';

export default class Transaction extends Model {
  static init(sequelize) {
    super.init({
      defected_items_arrival_date: {
        type: Sequelize.DATE,
      },
      transaction_defect_description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      transaction_technical_report: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      transaction_status: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      transaction_total_amount: {
        type: Sequelize.FLOAT,
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.TransactionItem, { foreignKey: 'transaction_id' });
    this.belongsTo(models.Entity, { foreignKey: 'user_id' });
  }
}
