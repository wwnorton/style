/** @type {import('stylelint').Config} */
module.exports = {
	rules: {
		// px font size prevents font scaling, which breaks a11y
		// https://css-tricks.com/accessible-font-sizing-explained/
		'declaration-property-unit-disallowed-list': {
			'font-size': ['px'],
		},
	},
};
