const mongoose = require('mongoose');

const Experience = mongoose.Schema(
	{
		designation: {
			type: String,
			require: true,
		},
		companyName: {
			type: String,
			required: true,
		},
		startDate: {
			type: Date,
			required: true,
		},
		endDate: {
			type: String,
		},
		present: {
			type: Boolean,
			required: true,
			default: false,
		},
		description: {
			type: String,
			required: true,
		},
		place: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = { Experience };
