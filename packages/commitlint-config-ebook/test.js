import test from 'ava';
import load from '@commitlint/load';
import commitlint from '@commitlint/lint';
import config from './';

let lint;

test.before(async (t) => {
	const opts = await load(config);
	lint = str => commitlint(
		str,
		opts.rules,
		opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {}
	);
});

test.beforeEach((t) => {
	t.context.lint = lint;
});

const commitTest = (desc, str, fn) => {
	const title = `${desc}: "${str}"`;
	test(title, async function (t) {
		t.context.report = await t.context.lint(str);
		return fn.apply(this, arguments);
	});
};

commitTest('invalid type', 'foo: bar', async (t) => {
	t.false(t.context.report.valid, 'test failure message');
});
