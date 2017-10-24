import fs from 'fs';
import stylelint from 'stylelint';
import config from '../../';

export const invalid = fs.readFileSync('./test/fixtures/invalid.scss', 'utf-8');

export const getWarnings = (res, rule) => Promise.resolve(res)
	.then(data => data.results[0].warnings.filter(w => w.rule === rule));

export const lint = code => stylelint.lint({ code, config });
