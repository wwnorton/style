/** stylelint-scss rules */
module.exports = {
	// add deeper nesting to align with Airbnb css/scss style guide
	'max-nesting-depth': [
		2,
		{
			ignoreAtRules: [
				'each',
				'media',
				'supports',
				'include',
			],
		},
	],
};
