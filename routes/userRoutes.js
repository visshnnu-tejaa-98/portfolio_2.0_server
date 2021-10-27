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
	addProject,
	deleteProject,
	updateProject,
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

Router.post('/addProject', addProject);
Router.post('/deleteProject/:id', deleteProject);
Router.post('/updateProject/:id', updateProject);

module.exports = Router;
