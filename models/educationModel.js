const mongoose = require('mongoose');

const educationSchema = mongoose.Schema(
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

const Education = mongoose.model('education', educationSchema);

module.exports = {
	Education,
};
