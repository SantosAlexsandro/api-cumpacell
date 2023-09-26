"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Transaction = require('../models/Transaction'); var _Transaction2 = _interopRequireDefault(_Transaction);
var _TransactionItem = require('../models/TransactionItem'); var _TransactionItem2 = _interopRequireDefault(_TransactionItem);
var _Item = require('../models/Item'); var _Item2 = _interopRequireDefault(_Item);

class ItemTransactionController {
  async index(req, res) {
    console.log(res);
    const transactionItems = await _TransactionItem2.default.findAll({
      include: {
        model: _Item2.default,
        attributes: ['name_item', 'brand', 'price_product'],
      },
    });
    res.status(200).json(transactionItems);
  }

  async store(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID da transação'],
        });
      }
      const transaction = await _Transaction2.default.findByPk(id);
      if (!transaction) {
        return res.status(400).json({
          errors: ['Transação não existe.'],
        });
      }
      const transactionItem = await _TransactionItem2.default.create(req.body);
      return res.json(transactionItem);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new ItemTransactionController();
