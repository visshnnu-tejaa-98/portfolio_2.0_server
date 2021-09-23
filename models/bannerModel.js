const mongoose = require('mongoose');

const bannerSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		designation: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: true,
		},
		resumeLink: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Banner = mongoose.model('banner', bannerSchema);

module.exports = {
	Banner,
};
