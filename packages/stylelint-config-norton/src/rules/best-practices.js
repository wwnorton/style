module.exports = {
	/** @see https://gitlab.com/wwnorton/style/stylelint-config-norton/issues/1 */
	/** changes severity to warning */
	'declaration-property-unit-blacklist': [{
		'font-size': ['px'],
	},
	{
		severity: 'warning',
	}],
};
