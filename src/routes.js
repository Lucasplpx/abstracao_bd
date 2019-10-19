const { Router } = require('express');
const routes = Router();

const User = require('./controllers/User');
const Address = require('./controllers/Address');
const Tech = require('./controllers/Tech');
const Report = require('./controllers/Report');

routes.get('/users', User.index);
routes.post('/users', User.store);

routes.get('/users/:user_id/addresses', Address.index);
routes.post('/users/:user_id/addresses', Address.store);

routes.get('/users/:user_id/techs', Tech.index);
routes.post('/users/:user_id/techs', Tech.store);

routes.delete('/users/:user_id/techs', Tech.delete);

routes.get('/report', Report.show);

module.exports = routes;

