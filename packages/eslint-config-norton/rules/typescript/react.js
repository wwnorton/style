/** @type {import('eslint').Linter.Config} */
module.exports = {
	rules: {
		// TypeScript supports public class fields so prefer public fields for static properties.
		// https://github.com/airbnb/javascript/blob/a24dc34a4a2748c99006a48e997aa0a06b1d4d94/packages/eslint-config-airbnb/rules/react.js#L487-L490
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
		'react/static-property-placement': ['error', 'static public field'],
	},
};
