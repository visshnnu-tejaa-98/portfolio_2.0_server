const express = require('express');
const Router = express.Router();

const { createUser, getUser } = require('../controllers/userController');

Router.get('/', getUser);
Router.post('/create', createUser);

module.exports = Router;
