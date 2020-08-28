/**
 * Overrides for usage with React.
 *
 * Additional dependencies expected:
 * - eslint-plugin-jsx-a11y
 * - eslint-plugin-react
 * - eslint-plugin-react-hooks
 *
 * Note that all of these can be added via `eslint-config-airbnb`.
 */
module.exports = {
	rules: {
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
		'react/jsx-props-no-spreading': ['off'],
		'react/static-property-placement': [
			'error',
			'property assignment',
			{
				defaultProps: 'static public field',
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};
