import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../models';

const User = models.Users;
const secret = 'Hba821';


export default {
  registerUser(req, res) {
    const password = bcrypt.hashSync(req.body.password, 10);
    return User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password,
        email: req.body.email
      })
      .then(user => res.status(201).send({ firstname: user.firstName,
        lastname: user.lastName,
        username: user.username,
        email: user.email, }))
      .catch(error => res.status(400).send(error));
  },

  loginUser(req, res) {
    User
      .findOne({ where: {
        email: req.body.email
      } }).then((user) => {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({
            username: user.username
          }, secret, { expiresIn: 86400 }
          );
          return res.status(200).send({
            message: 'success',
            token
          });
        }
        return res.status(400).send({ message: 'incorrect login details' });
      })
      .catch(error => res.status(400).send({ message: 'user not found in database' }));
  }
};
