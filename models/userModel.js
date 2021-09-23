const mongoose = require('mongoose');
const { Experience } = require('./experienceModel');
const { Education } = require('./educationModel');
const { Certificate } = require('./certificateModel');
const { Project } = require('./projectModel');

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

const user = mongoose.Schema(
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
			required: true,
		},
		experience: {
			type: [Experience],
			required: true,
		},
		education: {
			type: [Education],
			required: true,
		},
		certificates: {
			type: [Certificate],
			required: true,
		},
		projects: {
			type: [Project],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const About = mongoose.model('user', aboutSchema);

module.exports = {
	User,
};
