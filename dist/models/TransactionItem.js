"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class TransactionItem extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      quantity: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
      },
      unit_price_at_transaction: {
        type: _sequelize2.default.FLOAT,
      },
      total_price: {
        type: _sequelize2.default.FLOAT,
      },
      discount: {
        type: _sequelize2.default.FLOAT,
      },
      tax: {
        type: _sequelize2.default.FLOAT,
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
} exports.default = TransactionItem;
