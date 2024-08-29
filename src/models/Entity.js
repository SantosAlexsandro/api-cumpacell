import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Entity extends Model {
  static init(sequelize) {
    super.init({
      entity_first_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      entity_email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      entity_phone: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      entity_password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.entity_password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Transaction, { foreignKey: 'user_id' });
  }


  passwordIsValid(password) {
    return bcryptjs.compare(password, this.entity_password_hash);
  }
}
