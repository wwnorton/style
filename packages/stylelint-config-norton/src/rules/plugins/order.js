const primerOrder = require('./_property-order');

/** @type {import('stylelint').Config} */
module.exports = {
	rules: {
		'order/properties-alphabetical-order': null,
		'order/properties-order': primerOrder,
		'order/order': [
			[
				'custom-properties',
				'dollar-variables',
				{
					type: 'at-rule',
					name: 'extend',
				},
				'declarations',
				'rules',
			],
		],
	},
};
