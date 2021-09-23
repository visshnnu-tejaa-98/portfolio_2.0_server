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

const Hobbies = mongoose.model('hobbies', hobbiesSchema);

module.exports = {
	Hobbies,
};
