import controller from '../controllers';

const userControllers = controller.Users;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to our charting api!',
  }));

  app.post('/api/signup', userControllers.register);
  app.post('/api/signin', userControllers.login);

  app.all('', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    }));
};
