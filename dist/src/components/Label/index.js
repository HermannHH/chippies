'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n  line-height: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n'], ['\n  font-size: ', ';\n  line-height: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_helpers.shevyConfig);
var content = shevy.content,
    bs = shevy.baseSpacing;


var LabelTag = _styledComponents2.default.label(_templateObject, content.fontSize, content.lineHeight, function (props) {
  return '\n    color: ' + props.theme.colors[props.color][props.shade] + ';\n    font-weight: ' + props.theme.font.weight.semiBold + ';\n    font-family: ' + props.theme.font.family + ';\n    ' + (props.backgroundColor && props.backgroundShade && '\n      background-color: ' + props.theme.colors[props.backgroundColor][props.backgroundShade] + ';\n      border-radius: ' + props.theme.borders.radius + 'px;\n      padding: ' + bs(0.2) + ' ' + bs(0.4) + ';\n    ') + '\n  ';
});

function Label(_ref) {
  var theme = _ref.theme,
      text = _ref.text,
      color = _ref.color,
      shade = _ref.shade,
      backgroundColor = _ref.backgroundColor,
      backgroundShade = _ref.backgroundShade;

  return _react2.default.createElement(
    LabelTag,
    {
      color: color,
      shade: shade,
      theme: theme,
      backgroundColor: backgroundColor,
      backgroundShade: backgroundShade
    },
    text
  );
}

Label.propTypes = {
  theme: _propTypes2.default.shape(),
  text: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string,
  shade: _propTypes2.default.string,
  backgroundColor: _propTypes2.default.string,
  backgroundShade: _propTypes2.default.string
};

Label.defaultProps = {
  theme: _kratedTheme2.default,
  color: 'grey',
  shade: '2',
  backgroundColor: undefined,
  backgroundShade: undefined
};

exports.default = Label;

//# sourceMappingURL=index.js.map