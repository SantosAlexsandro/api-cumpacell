"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Transaction extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      defected_items_arrival_date: {
        type: _sequelize2.default.DATE,
      },
      transaction_defect_description: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      transaction_technical_report: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      transaction_status: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      transaction_total_amount: {
        type: _sequelize2.default.FLOAT,
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
} exports.default = Transaction;
