BEM Components Extended
=======================

[![devDependency Status](https://img.shields.io/david/dev/bem-incubator/bem-components-extended.svg?style=flat)](https://david-dm.org/bem-incubator/bem-components-extended#info=devDependencies)

### What is this?

A set of strange, but useful features on top of the [BEM Components Library](http://github.com/bem/bem-components).

All features are implemented at the `blocks` level.

Library supports the same [browsers](https://github.com/bem/bem-components#supported-browsers) and uses the same [technologies](https://github.com/bem/bem-components#techs) and [tools](https://github.com/bem/bem-components#tools), along with bem-components.

### Features

- [button_action_mod](blocks/button/_action/button_action_mod.en.md) &mdash; a button, that switches a container's mod on click

### Development

#### Working copy

Get sources:

`git clone git://github.com/bem-incubator/bem-components-extended.git`

`cd bem-components-extended`

Install dependencies (of tools):

`npm install`

To then run locally installed tools, use `export PATH=./node_modules/.bin:$PATH` or any alternative method.

Install dependent libraries:

`bower install`

Start the development server:

`magic server`

#### How to contribute

Feel free to create pull requests and issues with your proposals.
Don't forget to provide autotests (for bug fixes and new features), examples and docs (for new features).

#### JavaScript unit tests

`enb make specs`

`enb make specs desktop.specs/<entity-name>` &mdash; for point-based assembly

Example:

`enb make specs desktop.specs/button_action_mod`

#### Examples

`enb make tests`
