# eslint-config-norton [![Build Status][gitlab-ci-image]][gitlab-ci-url] [![Coverage percentage][gitlab-coverage-image]][gitlab-coverage-url]
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Norton JavaScript style guide](https://gitlab.com/wwnorton/style)


## Installation
Recommended: use [generator-norton-style](https://gitlab.com/wwnorton/style/generator-norton-style) (a [Yeoman](http://yeoman.io/) generator) to automatically add all required files and dependencies. Follow instructions on [generator-norton-style's README](https://gitlab.com/wwnorton/style/generator-norton-style/blob/master/README.md) to install [Yeoman](http://yeoman.io/) and generator-norton-style globally and then just follow the generator's prompts:

```bash
yo norton-style
```

Alternatively, you can install this repository directly. You'll also need a compatible version of ESLint:
```bash
npm install --save-dev git+ssh://git@gitlab.com:wwnorton/style/eslint-config-norton.git#v1.1.3
npm install --save-dev eslint@^4.9.0
```


## Usage
Once the `eslint-config-norton` package is installed, you can use it by specifying `norton` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

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

* No [comma-dangle](http://eslint.org/docs/rules/comma-dangle) on functions, but still `always-multiline` for all other forms. This is because [trailing function commas](https://github.com/tc39/proposal-trailing-function-commas) are only supported in ES2017 (Node 8+).
* [Tabs instead of spaces](https://gitlab.com/wwnorton/style/guide/issues/1).


[gitlab-ci-image]: https://gitlab.com/wwnorton/style/eslint-config-norton/badges/master/build.svg
[gitlab-ci-url]: https://gitlab.com/wwnorton/style/eslint-config-norton/commits/master
[gitlab-coverage-image]: https://gitlab.com/wwnorton/style/eslint-config-norton/badges/master/coverage.svg
[gitlab-coverage-url]: https://gitlab.com/wwnorton/style/eslint-config-norton/pipelines
