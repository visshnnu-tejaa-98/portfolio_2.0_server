const mongoose = require('mongoose');

const certificateSchema = mongoose.Schema(
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
			type: String,
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

const Certificate = mongoose.model('certificate', certificateSchema);

module.exports = {
	Certificate,
};
