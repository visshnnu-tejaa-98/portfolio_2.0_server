const { User } = require('../models/userModel');

/*
 * desc Create User
 * Path /api/v1/user/create
 */
const createUser = async (req, res) => {
	try {
		await User.create(req.body);
		res.status(200).json({ data: req.body, status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Get User
 * Path /api/v1/user
 */
const getUser = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (user) {
			res.status(200).json({ data: user, status: true, error: null });
		} else {
			res.status(400).json({ data: 'User not found', status: false, error: null });
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Edit User
 * Path /api/v1/user/update
 */
const updateUser = async (req, res) => {
	try {
		await User.updateOne(
			{ _id: '615ad6c850abe08f2d3d5842' },
			{
				name: req.body.name,
				designation: req.body.designation,
				photo: req.body.photo,
				resumeLink: req.body.resumeLink,
				aboutDescription: req.body.aboutDescription,
				mobile: req.body.mobile,
				email: req.body.email,
				linkedinUrl: req.body.linkedinUrl,
				twitterUrl: req.body.twitterUrl,
				instagramUrl: req.body.instagramUrl,
				facebookUrl: req.body.facebookUrl,
				githubUrl: req.body.githubUrl,
			}
		);
		res.status(200).json({ data: 'User Updated', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Add Experience
 * Path api/v1/user/addExperience
 */
const addExperience = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		user.experience.push(req.body);
		user.save();
		res.status(200).json({ data: 'Experience Added', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Delete Experience by ID
 * Path /api/v1/user/deleteExperience/:id
 */
const deleteExperience = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		let experience = user.experience.filter((obj) => obj._id != req.params.id);
		console.log(experience);
		user.experience = experience;
		user.save();
		res.status(200).json({ data: 'Experience Deleted', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Edit Experience by ID
 * Path /api/v1/user/updateExperience/:id
 */
const updateExperience = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		user.experience.map((obj) => {
			if (obj._id == req.params.id) {
				obj.designation = req.body.designation;
				obj.companyName = req.body.companyName;
				obj.startDate = req.body.startDate;
				obj.endDate = req.body.endDate;
				obj.present = req.body.present;
				obj.description = req.body.description;
				obj.place = req.body.place;
				console.log(obj);
			}
		});
		user.save();
		res.status(200).json({ data: 'Experience Updated', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Add Education
 * Path api/v1/user/addEducation
 */
const addEducation = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		user.education.push(req.body);
		user.save();
		res.status(200).json({ data: 'Education Added', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Delete Education by ID
 * Path /api/v1/user/deleteEducation/:id
 */
const deleteEducation = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		let education = user.education.filter((obj) => obj._id != req.params.id);
		console.log(education);
		user.education = education;
		user.save();
		res.status(200).json({ data: 'Education Deleted', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Edit Education by ID
 * Path /api/v1/user/updateEducation/:id
 */
const updateEducation = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		user.education.map((obj) => {
			if (obj._id == req.params.id) {
				obj.institute = req.body.institute;
				obj.startDate = req.body.startDate;
				obj.endDate = req.body.endDate;
				obj.present = req.body.present;
				obj.specilization = req.body.specilization;
				obj.description = req.body.description;
				obj.place = req.body.place;
				console.log(obj);
			}
		});
		user.save();
		res.status(200).json({ data: 'Education Updated', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Add Project
 * Path api/v1/user/addProject
 */
const addProject = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		user.projects.push(req.body);
		user.save();
		res.status(200).json({ data: 'Project Added', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Delete Project by ID
 * Path /api/v1/user/deleteProject/:id
 */
const deleteProject = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		let projects = user.projects.filter((obj) => obj._id != req.params.id);
		console.log(projects);
		user.projects = projects;
		user.save();
		res.status(200).json({ data: 'Project Deleted', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Edit Project by ID
 * Path /api/v1/user/updateProject/:id
 */
const updateProject = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		user.projects.map((obj) => {
			if (obj._id == req.params.id) {
				obj.title = req.body.title;
				obj.description = req.body.description;
				obj.category = req.body.category;
				obj.stack = req.body.stack;
				obj.hostedUrl = req.body.hostedUrl;
				obj.frontendUrl = req.body.frontendUrl;
				obj.backendUrl = req.body.backendUrl;
				obj.imageUrl = req.body.imageUrl;
				console.log(obj);
			}
		});
		user.save();
		res.status(200).json({ data: 'Project Updated', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Add  Certificate
 * Path api/v1/user/addCertificate
 */
const addCertificate = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		user.certificates.push(req.body);
		user.save();
		res.status(200).json({ data: 'Certificate Added', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Delete Certificate by ID
 * Path /api/v1/user/deleteCertificate/:id
 */
const deleteCertificate = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		let certificates = user.certificates.filter((obj) => obj._id != req.params.id);
		console.log(certificates);
		user.certificates = certificates;
		user.save();
		res.status(200).json({ data: 'Certificates Deleted', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

/*
 * desc Edit Certificate by ID
 * Path /api/v1/user/updateCertificate/:id
 */
const updateCertificate = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (!user) res.status(400).json({ data: 'User not found', status: false, error: null });
		user.certificates.map((obj) => {
			if (obj._id == req.params.id) {
				obj.title = req.body.title;
				obj.description = req.body.description;
				obj.startDate = req.body.startDate;
				obj.endDate = req.body.endDate;
				obj.validity = req.body.validity;
				obj.certificateUrl = req.body.certificateUrl;
				console.log(obj);
			}
		});
		user.save();
		res.status(200).json({ data: 'Project Updated', status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

module.exports = {
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
	addCertificate,
	deleteCertificate,
	updateCertificate,
};
