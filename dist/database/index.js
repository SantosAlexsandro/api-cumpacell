"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Item = require('../models/Item'); var _Item2 = _interopRequireDefault(_Item);
var _Entity = require('../models/Entity'); var _Entity2 = _interopRequireDefault(_Entity);
var _Transaction = require('../models/Transaction'); var _Transaction2 = _interopRequireDefault(_Transaction);
var _TransactionItem = require('../models/TransactionItem'); var _TransactionItem2 = _interopRequireDefault(_TransactionItem);

const models = [_Item2.default, _Entity2.default, _Transaction2.default, _TransactionItem2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
