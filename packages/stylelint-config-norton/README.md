# stylelint-config-norton [![Build Status][gitlab-ci-image]][gitlab-ci-url] [![Coverage percentage][gitlab-coverage-image]][gitlab-coverage-url]
> [Stylelint](https://github.com/stylelint/stylelint) shareable [config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md) for the [Norton stylesheet guide](https://gitlab.com/wwnorton/style)


## Installation
Recommended: use [generator-norton-style](https://gitlab.com/wwnorton/style/generator-norton-style) (a [Yeoman](http://yeoman.io/) generator) to automatically add all required files. Follow instructions on generator-norton-style to install `yo` and generator-norton-style globally and then just follow the generator's prompts:

```bash
yo norton-style
```

Alternatively, you can install stylelint and the Norton config directly:
```bash
npm install --save-dev stylelint git+ssh://git@gitlab.com:wwnorton/stylelint-config-norton.git#v1.0.0-rc.1
```


## Usage
Once the `stylelint-config-norton` package is installed, you can use it by specifying `norton` in the [`extends`](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) section of your [stylelint configuration](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md).

```js
// stylelint.config.js
module.exports = {
    extends: ['norton'],
    rules: {
        // Override rules here
    }
};
```


[gitlab-ci-image]: https://gitlab.com/wwnorton/style/stylelint-config-norton/badges/master/build.svg
[gitlab-ci-url]: https://gitlab.com/wwnorton/style/stylelint-config-norton/commits/master
[gitlab-coverage-image]: https://gitlab.com/wwnorton/style/stylelint-config-norton/badges/master/coverage.svg
[gitlab-coverage-url]: https://gitlab.com/wwnorton/style/stylelint-config-norton/pipelines
