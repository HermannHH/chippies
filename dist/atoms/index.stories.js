'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleDecorator = function StyleDecorator(storyFn) {
  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    storyFn()
  );
};

var atoms = (0, _react3.storiesOf)('Atoms', module);
atoms.addDecorator(_addonKnobs.withKnobs);
atoms.addDecorator(StyleDecorator);

exports.default = atoms;