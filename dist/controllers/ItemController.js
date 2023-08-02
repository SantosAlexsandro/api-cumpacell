"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Item = require('../models/Item'); var _Item2 = _interopRequireDefault(_Item);
// import Foto from '../models/Foto';

class ItemController {
  async index(req, res) {
    const itens = await _Item2.default.findAll({
      attributes: ['id', 'name_item', 'cod_product', 'brand', 'un', 'cod_ean', 'price_product', 'cost_product', 'gross_weight', 'light_weight', 'origin_product', 'classification_type', 'situation', 'type_product', 'vendor', 'observation'],
      order: [['id', 'DESC']], // [Foto, 'id', 'DESC']],
      /* include: {
        model: Foto,
        attributes: ['url', 'filename'],
      }, */
    });
    res.status(200).json(itens);
  }

  async store(req, res) {
    try {
      const item = await _Item2.default.create(req.body);
      return res.json(item);
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
      const item = await _Item2.default.findByPk(id, {
        attributes: ['id', 'name_item', 'cod_product', 'brand', 'un', 'cod_ean', 'price_product', 'cost_product', 'gross_weight', 'light_weight', 'origin_product', 'classification_type', 'situation', 'type_product', 'vendor', 'observation'],
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
      const item = await _Item2.default.findByPk(id);
      if (!item) {
        return res.status(400).json({
          errors: ['Item não existe.'],
        });
      }
      await item.destroy();
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
      const item = await _Item2.default.findByPk(id);
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

exports. default = new ItemController();
