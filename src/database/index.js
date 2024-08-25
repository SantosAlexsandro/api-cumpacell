import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Item from '../models/Item';
import Entity from '../models/Entity';
import Transaction from '../models/Transaction';
import TransactionItem from '../models/TransactionItem';

const models = [Item, Entity, Transaction, TransactionItem];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
