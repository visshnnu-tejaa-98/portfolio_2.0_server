const mongoose = require('mongoose');

const Certificate = mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			required: true,
		},
		startDate: {
			type: Date,
			required: true,
		},
		endDate: {
			type: Date,
		},
		validity: {
			type: Boolean,
			required: true,
			default: false,
		},
		certificateUrl: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = {
	Certificate,
};
