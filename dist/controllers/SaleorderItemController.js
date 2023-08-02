"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _SaleorderItem = require('../models/SaleorderItem'); var _SaleorderItem2 = _interopRequireDefault(_SaleorderItem);
// import Foto from '../models/Foto';

class SaleorderItemController {
  async index(req, res) {
    const salesorders = await _SaleorderItem2.default.findAll({
      attributes: ['id', 'qty_product', 'id_product', 'product_unit_price'],
      order: [['id', 'DESC']],
    });
    res.status(200).json(salesorders);
  }

  async store(req, res) {
    try {
      const salesorder = await _SaleorderItem2.default.create(req.body);
      return res.json(salesorder);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const item = await _SaleorderItem2.default.findByPk(id, {
        attributes: ['id', 'qty_product', 'id_product', 'product_unit_price'],
        order: [['id', 'DESC']],
      });
      if (!item) {
        return res.status(400).json({
          errors: ['Item não existe.'],
        });
      }

      return res.json(item);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const salesorder = await _SaleorderItem2.default.findByPk(id);
      if (!salesorder) {
        return res.status(400).json({
          errors: ['Item não existe.'],
        });
      }
      await salesorder.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const item = await _SaleorderItem2.default.findByPk(id);
      if (!item) {
        return res.status(400).json({
          errors: ['Item não existe.'],
        });
      }

      const itemUpdated = await item.update(req.body);

      return res.json(itemUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new SaleorderItemController();
