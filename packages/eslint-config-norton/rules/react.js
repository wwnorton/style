const { rules: styleRules } = require('./style');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	rules: {
		// Use tabs for more accessible code.
		// https://alexandersandberg.com/tabs-for-accessibility/
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		// https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md
		'react/jsx-indent': styleRules.indent,
		'react/jsx-indent-props': styleRules.indent,
	},
};
