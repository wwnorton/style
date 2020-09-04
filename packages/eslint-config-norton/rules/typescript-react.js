module.exports = {
	rules: {
		/** Add .tsx to react/jsx-filename-extension. */
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
		/**
		 * TypeScript supports public class fields so prefer public fields for static properties.
		 * https://github.com/airbnb/javascript/blob/a24dc34a4a2748c99006a48e997aa0a06b1d4d94/packages/eslint-config-airbnb/rules/react.js#L487-L490
		 *
		*/
		'react/static-property-placement': [
			'error',
			'static public field',
		],
		/** Add tsx to the base config. */
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				mjs: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
};
