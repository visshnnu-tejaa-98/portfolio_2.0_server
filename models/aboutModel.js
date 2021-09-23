const mongoose = require('mongoose');

const hobbiesSchema = mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const aboutSchema = mongoose.Schema(
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
		aboutDescription: {
			type: String,
			required: true,
		},
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
		hobbies: {
			type: [hobbiesSchema],
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
