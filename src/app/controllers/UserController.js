import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    // validacao com yup
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(3),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validacao falhou' });
    }

    const userExists = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Email ja cadastrado' });
    }

    const { id, name, email, user_type } = await User.create(req.body);

    return res.json({ id, name, email, user_type });
  }

  async update(req, res) {
    // validacao com yup
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .email()
        .required(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .required()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validacao falhou' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    // verificar se estou trocando o email
    if (email !== user.email) {
      // verificar se ja existe algum usuario com esse email
      const userExists = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (userExists) {
        return res.status(400).json({ error: 'Email ja cadastrado' });
      }
    }

    // verificar senha antiga
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Senha nao conferem' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({ id, name, email, provider });
  }
}

export default new UserController();