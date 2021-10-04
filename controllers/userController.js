const { User } = require('../models/userModel');

const createUser = async (req, res) => {
	try {
		await User.create(req.body);
		res.status(200).json({ data: req.body, status: true, error: null });
	} catch (error) {
		console.log(error);
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};

const getUser = async (req, res) => {
	try {
		let user = await User.findById('615ad6c850abe08f2d3d5842');
		if (user) {
			res.status(200).json({ data: user, status: true, error: null });
		} else {
			res.status(400).json({});
		}
	} catch (error) {
		res.status(400).json({ data: 'Something went wrong', status: false, error: error });
	}
};
module.exports = { createUser, getUser };
