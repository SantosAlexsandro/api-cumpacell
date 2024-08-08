
import Sequelize, { Model } from 'sequelize';

export default class TransactionItem extends Model {
  static init(sequelize) {
    super.init({
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      unit_price_at_transaction: {
        type: Sequelize.FLOAT,
      },
      total_price: {
        type: Sequelize.FLOAT,
      },
      discount: {
        type: Sequelize.FLOAT,
      },
      tax: {
        type: Sequelize.FLOAT,
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    // Associação com Item
    this.belongsTo(models.Item, { foreignKey: 'item_id' });

    // Associação com Transaction
    // this.belongsTo(models.Transaction, { foreignKey: 'transaction_id', as: 'transaction' });
    this.belongsTo(models.Transaction, { foreignKey: 'transaction_id'});
  }
}
