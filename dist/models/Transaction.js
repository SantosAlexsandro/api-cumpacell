"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Transaction extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      receiving_date: {
        type: _sequelize2.default.DATE,
      },
      name_item: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      brand_item: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 13],
            msg: 'Marca só pode ter no máximo 13 dígitos.',
          },
        },
      },
      model_item: {
        type: _sequelize2.default.STRING,
      },

      defect_description: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      technical_report: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      status_transaction: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      total_service_charge: {
        type: _sequelize2.default.FLOAT,
      },
    }, {
      sequelize,
    });
    return this;
  }

  // A transação tem muitos itens
  static associate(models) {
    this.hasMany(models.TransactionItem, { foreignKey: 'transaction_id' });
  }
} exports.default = Transaction;
