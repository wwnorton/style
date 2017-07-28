/** @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb */
module.exports = {
	extends: ['airbnb'],
	rules: {
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			/**
             * trailing function commas are only supported in ES2017 (& Node 8+)
             * @see https://github.com/tc39/proposal-trailing-function-commas
             */
			functions: 'never',
		}],
		indent: ['error', 'tab'],
		'no-tabs': 0,
	},
};
