import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    // "login"
    // verificar se usuario existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'MeetApper nao encontrado' });
    }

    // verificar se as senhas sao iguais
    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'Senha nao confere' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
