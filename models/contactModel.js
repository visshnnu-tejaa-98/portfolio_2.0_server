const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
	{
		mobile: {
			type: String,
			require: true,
		},
		Email: {
			type: String,
			required: true,
		},
		linkedinUrl: {
			type: String,
			required: true,
		},
		twitterUrl: {
			type: String,
			required: true,
		},
		instagramUrl: {
			type: String,
			required: true,
		},
		facebookUrl: {
			type: String,
			required: true,
		},
		githubUrl: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const About = mongoose.model('about', aboutSchema);

module.exports = {
	About,
};
