import fs from 'fs';
import path from 'path';
import stylelint from 'stylelint';
import sassConfig from '../..';
import cssConfig from '../../src/css';

export const invalidSass = fs.readFileSync(path.resolve('./test/fixtures/invalid.scss'), 'utf-8');
export const invalidCss = fs.readFileSync(path.resolve('./test/fixtures/invalid.css'), 'utf-8');

export const getWarnings = (res, rule) => Promise.resolve(res)
	.then(data => data.results[0].warnings.filter(w => w.rule === rule));

export const lint = (code, css = false) => stylelint.lint({
	code,
	config: (css) ? cssConfig : sassConfig,
});
