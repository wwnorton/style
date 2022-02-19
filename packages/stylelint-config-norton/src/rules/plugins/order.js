const primerOrder = require('./property-order');

/** order rules */
/** make @include go to the bottom order to align with Airbnb guidelines */
module.exports = {
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
};
