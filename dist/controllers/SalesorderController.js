"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _salesorder = require('../models/salesorder'); var _salesorder2 = _interopRequireDefault(_salesorder);
// import Foto from '../models/Foto';

class SalesorderController {
  async index(req, res) {
    const salesorders = await _salesorder2.default.findAll({
      attributes: ['id', 'name_customer', 'name_salesperson', 'discount_salesorder', 'addition_salesorder', 'payment_type', 'amount_received', 'observation_salesorder', 'status_salesorder'],
      order: [['id', 'DESC']], // [Foto, 'id', 'DESC']],
      /* include: {
        model: Foto,
        attributes: ['url', 'filename'],
      }, */
    });
    res.status(200).json(salesorders);
  }

  async store(req, res) {
    try {
      const salesorder = await _salesorder2.default.create(req.body);
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
      const item = await _salesorder2.default.findByPk(id, {
        attributes: ['id', 'name_customer', 'name_salesperson', 'discount_salesorder', 'addition_salesorder', 'payment_type', 'amount_received', 'observation_salesorder', 'status_salesorder'],
        order: [['id', 'DESC']], // [Foto, 'id', 'DESC']],
        /* include: {
          model: Foto,
          attributes: ['url', 'filename'],
        }, */
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
      const salesorder = await _salesorder2.default.findByPk(id);
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
      const item = await _salesorder2.default.findByPk(id);
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

exports. default = new SalesorderController();
