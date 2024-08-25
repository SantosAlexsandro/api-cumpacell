import Sequelize, { Model } from 'sequelize';

export default class Item extends Model {
  static init(sequelize) {
    super.init({
      item_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome do item precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      cod_product: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 6],
            msg: 'Código do produto só pode ter no máximo 6 números.',
          },
        },
      },
      item_brand: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      un: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      cod_ean: {
        type: Sequelize.INTEGER,
        validate: {
          len: {
            args: [0, 13],
            msg: 'EAN só pode ter no máximo 13 dígitos.',
          },
        },
      },
      price_product: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'O preço precisa ser um número inteiro ou de ponto flutuante.',
          },
        },
      },
      cost_product: {
        type: Sequelize.FLOAT,
      },
      gross_weight: {
        type: Sequelize.FLOAT,
      },
      light_weight: { // Corrigir depois para net weight
        type: Sequelize.FLOAT,
      },
      origin_product: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      classification_type: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      situation: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      type_product: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      vendor: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      observation: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
