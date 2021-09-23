const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema(
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

const Experience = mongoose.model('experience', experienceSchema);

module.exports = {
	Experience,
};
