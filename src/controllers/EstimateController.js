import Estimate from '../models/Estimate';

class EstimateController {
  async index(req, res) {
    const estimates = await Estimate.findAll();
    res.status(200).json(estimates);
  }

  async store(req, res) {
    const estimates = await Estimate.create(req.body);
    res.status(200).json(estimates);
  }
}

export default new EstimateController();
