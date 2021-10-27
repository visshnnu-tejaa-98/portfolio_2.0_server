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

module.exports = {
	createUser,
	getUser,
	updateUser,
	addExperience,
	deleteExperience,
	updateExperience,
};
