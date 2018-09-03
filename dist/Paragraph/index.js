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

var _shevyConfig = require('../shevyConfig');

var _shevyConfig2 = _interopRequireDefault(_shevyConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_shevyConfig2.default);
var content = shevy.content;


var PTag = _styledComponents2.default.p(_templateObject, content.fontSize, content.lineHeight, function (props) {
  return '\n    color: ' + props.theme.colors[props.color][props.shade] + ';\n    font-family: ' + props.theme.font.family + ';\n    margin: ' + (props.withMargin ? content.marginBottom + ' 0px' : '0px') + ';\n    font-weight: ' + props.theme.font.weight.standard + ';\n  ';
});

function Paragraph(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      color = _ref.color,
      shade = _ref.shade,
      withMargin = _ref.withMargin;

  return _react2.default.createElement(
    PTag,
    { color: color, shade: shade, theme: theme, withMargin: withMargin },
    children
  );
}

Paragraph.propTypes = {
  theme: _propTypes2.default.shape(),
  children: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string,
  shade: _propTypes2.default.number,
  withMargin: _propTypes2.default.bool
};

Paragraph.defaultProps = {
  theme: _kratedTheme2.default,
  color: 'grey',
  shade: 2,
  withMargin: true
};

exports.default = Paragraph;