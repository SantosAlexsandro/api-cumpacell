"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Item extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      item_name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome do item precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      cod_product: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 6],
            msg: 'Código do produto só pode ter no máximo 6 números.',
          },
        },
      },
      item_brand: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      un: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      cod_ean: {
        type: _sequelize2.default.INTEGER,
        validate: {
          len: {
            args: [0, 13],
            msg: 'EAN só pode ter no máximo 13 dígitos.',
          },
        },
      },
      price_product: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'O preço precisa ser um número inteiro ou de ponto flutuante.',
          },
        },
      },
      cost_product: {
        type: _sequelize2.default.FLOAT,
      },
      gross_weight: {
        type: _sequelize2.default.FLOAT,
      },
      light_weight: { // Corrigir depois para net weight
        type: _sequelize2.default.FLOAT,
      },
      origin_product: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      classification_type: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      situation: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      type_product: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      vendor: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      observation: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Item;
