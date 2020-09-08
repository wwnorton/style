/*
	Security plugins
	no-unsanitized: https://github.com/mozilla/eslint-plugin-no-unsanitized

*/

module.exports = {
	extends: [
		"plugin:no-unsanitized/DOM",
		"plugin:security/recommended",
		"plugin:security-node/recommended",
	],
	plugins: [
		"no-unsanitized",
		"no-wildcard-postmessage",
		"node",
		"prototype-pollution-security-rules",
		"security",
		"security-node"
	],
	rules: {
		"security-node/detect-dangerous-redirects"      : 0,
		"security/detect-non-literal-require"           : 0,
		"security-node/detect-non-literal-require-calls": 0,
		"no-wildcard-postmessage/no-wildcard-postmessage": 1,
		"prototype-pollution-security-rules/detect-merge"        : 1,
		"prototype-pollution-security-rules/detect-merge-objects": 1,
		"prototype-pollution-security-rules/detect-merge-options": 1,
		"prototype-pollution-security-rules/detect-deep-extend"  : 1,
		"node/no-deprecated-api"    : 1,
		"node/no-extraneous-import" : 1,
		"node/no-extraneous-require": 1,
	},
};
