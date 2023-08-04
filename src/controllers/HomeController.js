import Client from '../models/Client';

class HomeController {
  async index(req, res) {
    // res.status(200).json('index');
    const newClient = await Client.create({
      name: 'Alexsandro',
      surname: 'Vieira dos Santos',
      phone: '11945305889',
      email: 'web_alexsandro@hotmail.com',
    });
    res.json(newClient);
  }
}

export default new HomeController();
