import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Item from '../models/Item';
import User from '../models/User';

const models = [Item, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
