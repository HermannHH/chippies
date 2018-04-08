'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addonActions = require('@storybook/addon-actions');

var _addonKnobs = require('@storybook/addon-knobs');

var _addonInfo = require('@storybook/addon-info');

var _index = require('../index.stories');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.add('Button', (0, _addonInfo.withInfo)('\n      description or documentation about my component, supports markdown\n    \n      ~~~js\n      <Button />\n      ~~~\n    \n    ')(function (props) {
  return _react2.default.createElement(
    _index4.default,
    {
      text: (0, _addonKnobs.text)('text', 'Save'),
      disabled: (0, _addonKnobs.boolean)('disabled', false),
      handleClick: (0, _addonActions.action)('handleClick'),
      loadingText: (0, _addonKnobs.text)('loadingText', ''),
      fill: (0, _addonKnobs.boolean)('fill', false)
    },
    'I am child'
  );
}));