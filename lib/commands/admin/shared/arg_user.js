module.exports = {
	name: "user",
	desc: "The user to be added, with the @ (as if you were mentioning them)",
	type: "string",
	required: false,
	validations: [
		{
			errorMessage: "You need to mention the user for the command to work",
			validate: val => {
				return !!val.match(/<@[0-9]+>/);
			}
		}
	]
};
