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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default();
var content = shevy.content;


var LabelTag = _styledComponents2.default.label(_templateObject, content.fontSize, content.lineHeight, function (props) {
  return '\n    color: ' + props.theme.colors[props.color][props.shade] + ';\n    font-weight: ' + props.theme.font.weight.bold + ';\n    font-family: ' + props.theme.font.family + ';\n  ';
});

function Label(_ref) {
  var theme = _ref.theme,
      text = _ref.text,
      color = _ref.color,
      shade = _ref.shade;

  return _react2.default.createElement(
    LabelTag,
    { color: color, shade: shade, theme: theme },
    text
  );
}

Label.propTypes = {
  theme: _propTypes2.default.shape().isRequired,
  text: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string,
  shade: _propTypes2.default.number
};

Label.defaultProps = {
  color: 'grey',
  shade: 2
};

exports.default = (0, _styledComponents.withTheme)(Label);