"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Salesorder extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name_customer: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 25],
            msg: 'Nome do cliente precisa ter entre 3 e 25 caracteres.',
          },
        },
      },
      name_salesperson: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 25],
            msg: 'Nome do vendedor precisa ter entre 3 e 25 caracteres.',
          },
        },
      },
      discount_salesorder: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
      },
      addition_salesorder: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 0,
      },
      payment_type: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      amount_received: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'O preço precisa ser um número inteiro ou de ponto flutuante.',
          },
        },
      },
      observation_salesorder: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      status_salesorder: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  /*
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
  */
} exports.default = Salesorder;
