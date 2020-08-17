# stylelint-config-norton
![stylelint-config-norton](https://img.shields.io/npm/v/stylelint-config-norton?label=stylelint-config&logo=stylint-config-norton&style=flat-square "stylelint-config-norton NPM release")
> [Stylelint](https://github.com/stylelint/stylelint) shareable [config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md) for the [Norton stylesheet guide](https://gitlab.com/wwnorton/style)

## Installation

Use [npx](https://github.com/zkat/npx), which comes with NPM 5+:

```bash
$ npx install-peerdeps --dev stylelint-config-norton
```

If using npm <5, you'll need to install the peer dependencies on your own:

```sh
# get the peerDependencies versions
npm info "stylelint-config-norton@latest" peerDependencies

# install (replace "version" with the versions returned by the above command)
npm install --save-dev stylelint-config-norton stylelint@version stylelint-order@version stylelint-scss@version
```

Alternatively, you can use [generator-norton-style](https://gitlab.com/wwnorton/style/generator-norton-style) (a [Yeoman](http://yeoman.io/) generator) to automatically add all required files and dependencies. Follow instructions on [generator-norton-style's README](https://gitlab.com/wwnorton/style/generator-norton-style/blob/master/README.md) to install [Yeoman](http://yeoman.io/) and generator-norton-style globally and then just follow the generator's prompts:

```sh
$ yo norton-style
```

## Usage

Once the `stylelint-config-norton` package is installed, you can use it by specifying `stylelint-config-norton` in the [`extends`](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) section of your [stylelint configuration](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md).

```js
// stylelint.config.js
module.exports = {
  extends: ['stylelint-config-norton'],
  rules: {
    // Override rules here
  }
};
```

### Usage without Sass rules

To use the Norton config in a project that doesn't use [Sass](https://sass-lang.com/), import and use the included css.js config instead of the default one.

```js
// stylelint.config.js
module.exports = {
  extends: [require.resolve('stylelint-config-norton/src/css')],
  rules: {
    // Override rules here
  }
};
```

## Rules

This configuration extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines).

It modifies the following rules:

* `at-rule-empty-line-before` ignores `@forward`, `@import`, and `@use`.
* `declaration-property-unit-blacklist` includes `px` for `font-size` with `severity` of `warning` for accessibility best practice.
* `function-parentheses-space-inside` is `never-single-line` instead of `never` to be more in line with [eslint-config-norton](https://github.com/wwnorton/style/tree/main/packages/eslint-config-norton).
* `indentation` uses tabs instead of spaces for accessibility.
* `max-empty-lines` is 2 instead of 1.
* `max-nesting-depth` is 2 instead of 1.
* `order/properties-order` is inspired by [the order from GitHub's Primer design system](https://github.com/primer/primer/blob/master/tools/stylelint-config-primer/index.js#L47-L217) instead of alphabetical. See related issues: #3 & #4. It also adds and groups accessibility properties.
* `scss/at-rule-empty-line-before` doesn't allow an empty line between `@if`/`@else` statements.