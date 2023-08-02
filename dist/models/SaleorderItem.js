"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class SaleorderItem extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      qty_product: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
      },
      id_product: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 25],
            msg: 'Nome do vendedor precisa ter entre 3 e 25 caracteres.',
          },
        },
      },
      product_unit_price: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = SaleorderItem;
