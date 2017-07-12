/** @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb */
module.exports = {
    extends: ['airbnb'],
    rules: {
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',             // function trailing commas are only supported in Node 8+
        }],
        indent: ['error', 4],
    },
};
