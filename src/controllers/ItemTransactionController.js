import Transaction from '../models/Transaction';
import TransactionItem from '../models/TransactionItem';
import Item from '../models/Item';

class ItemTransactionController {
  async index(req, res) {
    console.log(res);
    const transactionItems = await TransactionItem.findAll({
      include: {
        model: Item,
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
      const transaction = await Transaction.findByPk(id);
      if (!transaction) {
        return res.status(400).json({
          errors: ['Transação não existe.'],
        });
      }
      const transactionItem = await TransactionItem.create(req.body);
      return res.json(transactionItem);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ItemTransactionController();
