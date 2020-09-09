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
		/** Enable tabs in JSX. */
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],

		/** Master Eslint Norton Rules */
		'react/no-find-dom-node': 'warn',
	},
};
