import TransactionItem from '../models/TransactionItem';

class ItemTransactionController {
  async index(req, res) {
    res.status(200).json('index');
  }

  async store(req, res) {
    try {
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
