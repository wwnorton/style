# stylelint-config-norton
[![Build Status](https://gitlab.com/wwnorton/stylelint-config-norton/badges/master/build.svg)](https://gitlab.com/wwnorton/stylelint-config-norton/commits/master)
> [Stylelint](https://github.com/stylelint/stylelint) shareable [config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md) for the [Norton stylesheet guide](https://gitlab.com/wwnorton/style)


## Installation
```sh
$ npm install --save-dev stylelint git+ssh://git@gitlab.com:wwnorton/stylelint-config-norton.git#v1.0.0-rc.0
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
