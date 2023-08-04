import Estimate from '../models/Estimate';

class EstimateController {
  async index(req, res) {
    const estimates = await Estimate.findAll();
    res.status(200).json(estimates);
  }

  async store(req, res) {}

  async show(req, res) {}

  async delete(req, res) {}

  async update(req, res) {}
}

export default new EstimateController();
