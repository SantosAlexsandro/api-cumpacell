import Sequelize, { Model } from 'sequelize';

export default class Estimate extends Model {
  static init(sequelize) {
    super.init({
      receiving_date: {
        type: Sequelize.DATE,
      },
      name_client: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 6],
            msg: 'Código do produto preciter ter entre 3 e 6 caracteres.',
          },
        },
      },
      phone: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Já tem outro usuário com esse número cadastrado.',
        },
      },
      name_item: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      brand_item: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 13],
            msg: 'Marca só pode ter no máximo 13 dígitos.',
          },
        },
      },
      model_item: {
        type: Sequelize.STRING,
      },

      defect_description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      technical_report: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      status_transaction: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      total_service_charge: {
        type: Sequelize.FLOAT,
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
}
