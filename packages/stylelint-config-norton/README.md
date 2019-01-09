# stylelint-config-norton [![Build Status][gitlab-ci-image]][gitlab-ci-url]
> [Stylelint](https://github.com/stylelint/stylelint) shareable [config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md) for the [Norton stylesheet guide](https://gitlab.com/wwnorton/style)


## Installation
Use [npx](https://github.com/zkat/npx), which comes with NPM 5+:
```bash
npx install-peerdeps --dev stylelint-config-norton
```

If using npm <5, you'll need to install the peer dependencies on your own:
```bash
# get the peerDependencies versions
npm info "stylelint-config-norton@latest" peerDependencies
# install (replace "version" with the versions returned by the above command)
npm install --save-dev stylelint-config-norton stylelint@version stylelint-order@version stylelint-scss@version
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
* `order/properties-order` uses [the order from GitHub's Primer design system](https://github.com/primer/primer/blob/master/tools/stylelint-config-primer/index.js#L47-L217) instead of alphabetical. See related issues: #3 & #4.
* `scss/at-rule-empty-line-before` doesn't allow an empty line between `@if`/`@else` statements.


[gitlab-ci-image]: https://gitlab.com/wwnorton/style/stylelint-config-norton/badges/master/build.svg
[gitlab-ci-url]: https://gitlab.com/wwnorton/style/stylelint-config-norton/commits/master
[gitlab-coverage-image]: https://gitlab.com/wwnorton/style/stylelint-config-norton/badges/master/coverage.svg
[gitlab-coverage-url]: https://gitlab.com/wwnorton/style/stylelint-config-norton/pipelines
