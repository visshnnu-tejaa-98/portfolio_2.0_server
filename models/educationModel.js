const mongoose = require('mongoose');

const Education = mongoose.Schema(
	{
		Standard: {
			type: String,
			require: true,
		},
		institute: {
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
		specilization: {
			type: String,
			required: true,
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

module.exports = {
	Education,
};
