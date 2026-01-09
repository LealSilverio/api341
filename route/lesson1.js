const routes = require('express').Router();
const { baseRoute } = require('../controller/lesson1');

routes.get('/', baseRoute);

module.exports = routes;