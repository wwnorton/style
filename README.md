# eslint-config-norton [![Build Status][gitlab-ci-image]][gitlab-ci-url] [![Coverage percentage][gitlab-coverage-image]][gitlab-coverage-url]
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Norton JavaScript style guide](https://gitlab.com/wwnorton/style)


## Installation
Recommended: use [generator-norton-style](https://gitlab.com/wwnorton/style/generator-norton-style) (a [Yeoman](http://yeoman.io/) generator) to automatically add all required files. Follow instructions on generator-norton-style to install `yo` and generator-norton-style globally and then just follow the generator's prompts:

```bash
yo norton-style
```

Alternatively, you can install this repository directly and then install its peer dependencies:
```bash
npm install --save-dev git+ssh://git@gitlab.com:wwnorton/style/eslint-config-norton.git#v1.1.0
```

The easiest way to install peer dependencies is with [install-peerdeps](https://github.com/nathanhleung/install-peerdeps), which you'll need to install globally (`npm install -g install-peerdeps`). Once installed, you can install [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)'s peer dependencies:
```bash
install-peerdeps -d eslint-config-airbnb
```


## Usage
Once the `eslint-config-norton` package is installed, you can use it by specifying `norton` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

### Examples
`.eslintrc.js`
```js
module.exports = {
    extends: ['norton'],
    rules: {
        // Override rules here
    }
};
```

`.eslintrc.json` in a browser environment with jQuery
```json
{
    "extends": [
        "norton"
    ],
    "env": {
        "browser": true,
        "jquery": true
    }
}
```


[gitlab-ci-image]: https://gitlab.com/wwnorton/style/eslint-config-norton/badges/master/build.svg
[gitlab-ci-url]: https://gitlab.com/wwnorton/style/eslint-config-norton/commits/master
[gitlab-coverage-image]: https://gitlab.com/wwnorton/style/eslint-config-norton/badges/master/coverage.svg
[gitlab-coverage-url]: https://gitlab.com/wwnorton/style/eslint-config-norton/pipelines
