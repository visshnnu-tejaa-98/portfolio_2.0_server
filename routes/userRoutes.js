const express = require('express');
const Router = express.Router();

const {
	createUser,
	getUser,
	updateUser,
	addExperience,
	deleteExperience,
	updateExperience,
	addEducation,
	deleteEducation,
	updateEducation,
} = require('../controllers/userController');

Router.get('/', getUser);
Router.post('/create', createUser);
Router.post('/update', updateUser);

Router.post('/addExperience', addExperience);
Router.post('/deleteExperience/:id', deleteExperience);
Router.post('/updateExperience/:id', updateExperience);

Router.post('/addEducation', addEducation);
Router.post('/deleteEducation/:id', deleteEducation);
Router.post('/updateEducation/:id', updateEducation);

module.exports = Router;
