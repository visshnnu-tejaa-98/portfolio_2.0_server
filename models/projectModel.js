const mongoose = require('mongoose');

const CATEGORY_ENUM = ['Frontend', 'Backend', 'Fullstack', 'Package'];

const stackSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
});

const Project = mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: CATEGORY_ENUM,
			required: true,
			default: false,
		},
		stack: {
			type: [stackSchema],
			required: true,
		},
		hostedUrl: {
			type: String,
			required: true,
		},
		frontendUrl: {
			type: String,
			required: true,
		},
		backendUrl: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = {
	Project,
};
