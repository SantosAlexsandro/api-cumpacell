import Transaction from '../models/Transaction';
import TransactionItem from '../models/TransactionItem';
// import Item from '../models/Item';
import Entity from '../models/Entity';

class TransactionController {
  async index(req, res) {
    const transactions = await Transaction.findAll({
      attributes: ['id',  ['created_at', 'transaction_date'], 'defected_items_arrival_date', 'transaction_status', 'transaction_total_amount' ],
      order: [['id', 'DESC']],
      include: [
        {
          model: Entity,
          attributes: ['entity_first_name'],
        }
      ],
    });
    res.status(200).json(transactions);
  }

  async store(req, res) {
    try {
      const transaction = await Transaction.create(req.body);
      return res.json(transaction);
    } catch (e) {
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
      const transaction = await Transaction.findByPk(id, {
        attributes: ['id', 'receiving_date', 'defect_description', 'technical_report', 'status_transaction', 'total_service_charge'],
        order: [['id', 'DESC'], [TransactionItem, 'id', 'DESC']],
        include: {
          model: TransactionItem,
          attributes: ['quantity', 'unit_price_at_transaction', 'total_price', 'discount', 'tax'],
        },
      });
      if (!transaction) {
        return res.status(400).json({
          errors: ['Transação não existe.'],
        });
      }
      return res.json(transaction);
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
      const transaction = await Transaction.findByPk(id);
      if (!transaction) {
        return res.status(400).json({
          errors: ['Transação não existe.'],
        });
      }
      await transaction.destroy();
      return res.json({
        deleted: true,
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
      const transaction = await Transaction.findByPk(id);
      if (!transaction) {
        return res.status(400).json({
          errors: ['Transação não existe.'],
        });
      }
      const transactionUpdated = await transaction.update(req.body);
      return res.json(transactionUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TransactionController();
