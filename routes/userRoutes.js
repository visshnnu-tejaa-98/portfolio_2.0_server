const express = require('express');
const Router = express.Router();

const {
	createUser,
	getUser,
	updateUser,
	addExperience,
	deleteExperience,
	updateExperience,
} = require('../controllers/userController');

Router.get('/', getUser);
Router.post('/create', createUser);
Router.post('/update', updateUser);
Router.post('/addExperience', addExperience);
Router.post('/deleteExperience/:id', deleteExperience);
Router.post('/updateExperience/:id', updateExperience);

module.exports = Router;
