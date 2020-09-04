# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 4.0.0-beta.3 (2020-09-04)

* docs(eslint-config-norton): update and fix typos for typescript project documentation ([aca96d3](https://github.com/wwnorton/style/commit/aca96d3))
* docs(eslint-config-norton): update new Typescript usage documentation ([25936fa](https://github.com/wwnorton/style/commit/25936fa))
* test: add post Prettier testing ([de7860a](https://github.com/wwnorton/style/commit/de7860a))
* test: setup for prettier changes formatting in tests ([1f83922](https://github.com/wwnorton/style/commit/1f83922))
* test(eslint-config-norton): add tests for all rules and file types ([f3c3fc7](https://github.com/wwnorton/style/commit/f3c3fc7))
* fix: add back Prettier semi rules for rule clarity and easier testing ([70f8d6e](https://github.com/wwnorton/style/commit/70f8d6e))
* fix(eslint-config-norton): don't enforce env in config ([3af1f12](https://github.com/wwnorton/style/commit/3af1f12))
* fix(eslint-config-norton): ensure that Norton rules are preferred over extended configs ([2ab6547](https://github.com/wwnorton/style/commit/2ab6547))
* fix(eslint-config-norton): overhaul typescript overrides ([f8121c4](https://github.com/wwnorton/style/commit/f8121c4))
* fix(eslint-config-norton): prefer norton rules in base config ([a455a96](https://github.com/wwnorton/style/commit/a455a96))
* fix(eslint-config-norton): re-enable semicolon since the prettier config disables them ([6b98ba1](https://github.com/wwnorton/style/commit/6b98ba1))
* refactor: move typescript rules into rules folder ([bda8892](https://github.com/wwnorton/style/commit/bda8892))
* refactor: remove semi rules in favor of prettier formatting ([b1240ae](https://github.com/wwnorton/style/commit/b1240ae))
* refactor(eslint-config-norton): add ts/tsx to import/extensions rule & setting ([ad5d5c0](https://github.com/wwnorton/style/commit/ad5d5c0))
* refactor(eslint-config-norton): override base with typescript base ([ca16f31](https://github.com/wwnorton/style/commit/ca16f31))
* refactor(eslint-config-norton): prefer "off" to 0 ([31c5e27](https://github.com/wwnorton/style/commit/31c5e27))
* refactor(eslint-config-norton): remove redundant and opinionated rules ([c9f1778](https://github.com/wwnorton/style/commit/c9f1778))
* refactor(eslint-config-norton): remove redundant plugins ([e55e395](https://github.com/wwnorton/style/commit/e55e395))
* refactor(eslint-config-norton): simplify config comment ([f8ff14d](https://github.com/wwnorton/style/commit/f8ff14d))
* refactor(eslint-config-norton): use the base config exposed by esling-config-airbnb ([dfd2183](https://github.com/wwnorton/style/commit/dfd2183))
* chore: add new entrypoints to files and add typescript to peerDependenciesMeta ([3f1c379](https://github.com/wwnorton/style/commit/3f1c379))
* chore: import typescriptReact ([31a3071](https://github.com/wwnorton/style/commit/31a3071))
* chore: remove unnecessary dependency ([58a5733](https://github.com/wwnorton/style/commit/58a5733))
* feat: move typescript overrides into entrypoints ([2053be4](https://github.com/wwnorton/style/commit/2053be4))





## 4.0.0-beta.2 (2020-08-26)

* chore: fix missing base entrypoint by adding base.js to files ([0c89d3a](https://github.com/wwnorton/style/commit/0c89d3a))
* chore: remove extra comma in dependencies ([48ab099](https://github.com/wwnorton/style/commit/48ab099))
* chore: update package to proper homepage url ([41d9765](https://github.com/wwnorton/style/commit/41d9765))
* chore(eslint): add typescript to peerDependencies ([202e321](https://github.com/wwnorton/style/commit/202e321))





## 3.1.3 (2020-07-24)


### Bug Fixes

* make sure overrides are included on npm ([307e5ac](https://github.com/wwnorton/style/commit/307e5ac3fba119ad2f5f1fab2c9270235bf399b9))
* remove redundant strict rules ([e90d59f](https://github.com/wwnorton/style/commit/e90d59fb10b9d18cc00130c99280079b05d587fd))
* require overrides ahead of compilation ([8d59ed7](https://github.com/wwnorton/style/commit/8d59ed7af9e0ac764776de00745db45d2855273c))
* update peer deps to be in line with airbnb ([9ac9715](https://github.com/wwnorton/style/commit/9ac9715ebb0de9d7ea802a114833214350dc34d0))


### Features

* add hooks to do standard release ([cffa46b](https://github.com/wwnorton/style/commit/cffa46b0543d051dd15c13afce9d65c66cac03be))
* add overrides for react & typescript ([3f197c1](https://github.com/wwnorton/style/commit/3f197c1e3db35735e4c726698e4ccad12f0b4681))
* remove support for node 6 ([bfc856e](https://github.com/wwnorton/style/commit/bfc856e80483fbeff668832730d2c5d5cbf72a65))
* update airbnb-base to v14 ([10dbfa5](https://github.com/wwnorton/style/commit/10dbfa58960c47f72f0554c1d40aea6c548b65be))
* update eslint-config-airbnb-base ([3dd60a7](https://github.com/wwnorton/style/commit/3dd60a7d990d236ec0307e6b75d28a01ce5cfd8b))


### Performance Improvements

* remove pointless coverage ([798b072](https://github.com/wwnorton/style/commit/798b072c7d0d0e453c92d54df99ec16015ee57cb))


### BREAKING CHANGES

* see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09
* see
https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md





# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.1.2](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.1.1...v3.1.2) (2020-07-14)


### Bug Fixes

* make sure overrides are included on npm ([4e083a7](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/4e083a7f7e6efc2da425a2904b4df141e858e2d9))

### [3.1.1](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.1.0...v3.1.1) (2020-07-14)


### Bug Fixes

* require overrides ahead of compilation ([76cb91e](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/76cb91ed38c00588b12aa8e86375981c242f01db))

## [3.1.0](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.0.3...v3.1.0) (2020-07-14)


### Features

* add overrides for react & typescript ([f2c3a32](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/f2c3a32fba7523783a46d0d0516059334b293eeb))

### [3.0.3](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.0.2...v3.0.3) (2020-07-14)

### [3.0.2](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.0.1...v3.0.2) (2020-03-11)


### Bug Fixes

* remove redundant strict rules ([27b2e08](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/27b2e08283751c3d642af5af1f82533d0afb0a6b))

### [3.0.1](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v3.0.0...v3.0.1) (2019-08-12)


### Bug Fixes

* update peer deps to be in line with airbnb ([107722f](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/107722f))

## [3.0.0](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v2.0.2...v3.0.0) (2019-08-12)


### ⚠ BREAKING CHANGES

* see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09

### Features

* update airbnb-base to v14 ([0b5de99](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/0b5de99))

<a name="2.0.2"></a>
## [2.0.2](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v2.0.1...v2.0.2) (2019-01-09)



<a name="2.0.1"></a>
## [2.0.1](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v2.0.0...v2.0.1) (2018-11-05)



<a name="2.0.0"></a>
# [2.0.0](https://gitlab.com/wwnorton/style/eslint-config-norton/compare/v1.2.2...v2.0.0) (2018-08-21)


### Features

* add hooks to do standard release ([c200e82](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/c200e82))
* remove support for node 6 ([9807698](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/9807698))
* update eslint-config-airbnb-base ([049f4fc](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/049f4fc))


### Performance Improvements

* remove pointless coverage ([67c31d8](https://gitlab.com/wwnorton/style/eslint-config-norton/commit/67c31d8))


### BREAKING CHANGES

* see 
https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md
