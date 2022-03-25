/** @type {import('stylelint').Config} */
module.exports = {
	rules: {
		// add deeper nesting to align with Airbnb scss style guide
		// https://github.com/airbnb/css#nested-selectors
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
	},
};
