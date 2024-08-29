import jwt from 'jsonwebtoken';
import Entity from '../models/Entity';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await Entity.findOne({ where: { entity_email: email } });
    //console.log('log', user)

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe.'],
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida.'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, entity_email: email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.status(200).json({ token, user: { nome: user.entity_first_name, id, entity_email: email } });
  }
}

export default new TokenController();
