# stylelint-config-norton [![Build Status][gitlab-ci-image]][gitlab-ci-url] [![Coverage percentage][gitlab-coverage-image]][gitlab-coverage-url]
> [Stylelint](https://github.com/stylelint/stylelint) shareable [config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md) for the [Norton stylesheet guide](https://gitlab.com/wwnorton/style)


## Installation
As of `v1.1.6`, this repository can be installed from the NPM registry. You'll also need a compatible version of Stylelint, [stylelint-order](https://github.com/hudochenkov/stylelint-order), and [stylelint-scss](https://github.com/kristerkari/stylelint-scss), which are peer dependencies:
```bash
# get the peerDependencies versions
npm info "stylelint-config-norton@latest" peerDependencies
# install (this assumes the above returns these specific versions)
npm install --save-dev stylelint-config-norton stylelint@^8.2.0 stylelint-order@^0.8.0 stylelint-scss@^2.2.0
```

If using NPM 5+, you can use [npx](https://github.com/zkat/npx) to install the correct peer dependencies:
```bash
npx install-peerdeps --dev stylelint-config-norton
```

Alternatively, you can use [generator-norton-style](https://gitlab.com/wwnorton/style/generator-norton-style) (a [Yeoman](http://yeoman.io/) generator) to automatically add all required files and dependencies. Follow instructions on [generator-norton-style's README](https://gitlab.com/wwnorton/style/generator-norton-style/blob/master/README.md) to install [Yeoman](http://yeoman.io/) and generator-norton-style globally and then just follow the generator's prompts:

```bash
yo norton-style
```


## Usage
Once the `stylelint-config-norton` package is installed, you can use it by specifying `norton` in the [`extends`](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) section of your [stylelint configuration](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md).

### Examples
```js
// stylelint.config.js
module.exports = {
	extends: ['norton'],
	rules: {
		// Override rules here
	}
};
```


## Rules
This configuration extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines).

It modifies the following rules:

* `declaration-property-unit-blacklist` includes `px` for `font-size`. See [related issue](https://gitlab.com/wwnorton/style/stylelint-config-norton/issues/1).
* `function-parentheses-space-inside` is `never-single-line` instead of `never` to be more in line with [eslint-config-norton](https://gitlab.com/wwnorton/style/eslint-config-norton).
* `indentation` uses [tabs instead of spaces](https://gitlab.com/wwnorton/style/guide/issues/1).
* `max-empty-lines` is 2 instead of 1.
* `order/properties-order` uses the [idiomatic css declaration order](https://github.com/necolas/idiomatic-css#declaration-order) from [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order) instead of alphabetical. See [related issue](https://gitlab.com/wwnorton/style/stylelint-config-norton/issues/3).
* `scss/at-rule-empty-line-before` doesn't allow an empty line between `@if`/`@else` statements.


[gitlab-ci-image]: https://gitlab.com/wwnorton/style/stylelint-config-norton/badges/master/build.svg
[gitlab-ci-url]: https://gitlab.com/wwnorton/style/stylelint-config-norton/commits/master
[gitlab-coverage-image]: https://gitlab.com/wwnorton/style/stylelint-config-norton/badges/master/coverage.svg
[gitlab-coverage-url]: https://gitlab.com/wwnorton/style/stylelint-config-norton/pipelines
