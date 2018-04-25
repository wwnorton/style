# eslint-config-norton [![Build Status][gitlab-ci-image]][gitlab-ci-url] [![Coverage percentage][gitlab-coverage-image]][gitlab-coverage-url]
An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Norton code style](https://gitlab.com/wwnorton/style).

A note from [airbnb's JavaScript guide](https://github.com/airbnb/javascript), which this repository extends:
> **Note**: this guide assumes you are using [Babel](https://babeljs.io), and requires that you use [babel-preset-airbnb](https://npmjs.com/babel-preset-airbnb) or the equivalent. It also assumes you are installing shims/polyfills in your app, with [airbnb-browser-shims](https://npmjs.com/airbnb-browser-shims) or the equivalent.

## Installation
As of `v1.2.1`, this repository can be installed from the NPM registry. You'll also need a compatible version of ESLint, and [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import), which are peer dependencies:
```bash
npm install --save-dev eslint-config-norton eslint@^4.9.0 eslint-plugin-import@^2.7.0
```

If using NPM 5+, you can use [npx](https://github.com/zkat/npx) to install the peer dependencies:
```bash
npx install-peerdeps --dev eslint-config-norton
```

Alternatively, you can use [generator-norton-style](https://gitlab.com/wwnorton/style/generator-norton-style) (a [Yeoman](http://yeoman.io/) generator) to automatically add all required files and dependencies. Follow instructions on [generator-norton-style's README](https://gitlab.com/wwnorton/style/generator-norton-style/blob/master/README.md) to install [Yeoman](http://yeoman.io/) and generator-norton-style globally and then just follow the generator's prompts:
```bash
yo norton-style
```


## Usage
Once the `eslint-config-norton` package is installed, you can use it by specifying `norton` or `eslint-config-norton` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring). Note that generator-norton-style automatically sets up this file. You can then override anything you like from there.

### Examples
`.eslintrc.js` with 2 spaces instead of tabs.
```js
module.exports = {
	extends: ['norton'],	// or 'eslint-config-norton'
	rules: {
		indent: ['error', 2],
		'no-tabs': 'error',
	},
};
```

`.eslintrc.json` in a browser environment with jQuery
```json
{
  "extends": [
    "eslint-config-norton"
  ],
  "env": {
    "browser": true,
    "jquery": true
  }
}
```


## Rules
This configuration extends [airbnb's base style guide](https://github.com/airbnb/javascript) ([eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)). It overrides the following rules:

* No [comma-dangle](http://eslint.org/docs/rules/comma-dangle) on functions, but still `always-multiline` for all other forms. This is because [trailing function commas](https://github.com/tc39/proposal-trailing-function-commas) are only supported in ES2017 (Node 8+), and we still support Node 6.
* [Tabs instead of spaces](https://gitlab.com/wwnorton/style/guide/issues/1).


[gitlab-ci-image]: https://gitlab.com/wwnorton/style/eslint-config-norton/badges/master/build.svg
[gitlab-ci-url]: https://gitlab.com/wwnorton/style/eslint-config-norton/commits/master
[gitlab-coverage-image]: https://gitlab.com/wwnorton/style/eslint-config-norton/badges/master/coverage.svg
[gitlab-coverage-url]: https://gitlab.com/wwnorton/style/eslint-config-norton/pipelines
