/**
 * Overrides for usage with TypeScript.
 */
module.exports = {
	files: ['*.ts'],
	extends: [
		'./typescript-base'
	].map(require.resolve),
};
