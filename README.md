# eslint-config-norton
[![Build Status](https://gitlab.com/wwnorton/style/eslint-config-norton/badges/master/build.svg)](https://gitlab.com/wwnorton/style/eslint-config-norton/commits/master)
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Norton JavaScript style guide](https://gitlab.com/wwnorton/style)

## Installation
[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and all its peer dependencies are installed alongside this repository, but you'll also need to install [eslint@3.x](https://github.com/eslint/eslint/tree/3.x), which is a peer of this repository.
```sh
$ npm install --save-dev eslint@3.19 git+ssh://git@gitlab.com:wwnorton/style/eslint-config-norton.git#v1.0.0-rc.4
```

## Usage
Once the `eslint-config-norton` package is installed, you can use it by specifying `norton` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
// .eslintrc.js
module.exports = {
    extends: 'norton',
    rules: {
        // Override rules here
    }
};
```
