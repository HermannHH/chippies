'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n  line-height: ', ';\n  margin-bottom: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n'], ['\n  font-size: ', ';\n  line-height: ', ';\n  margin-bottom: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n']);

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
var content = shevy.content;


var SmallTag = _styledComponents2.default.small(_templateObject, content.fontSize - 4, content.lineHeight, content.marginBottom, function (props) {
  return '\n    color: ' + props.theme.colors[props.color][props.shade] + ';\n    font-family: ' + props.theme.font.family + ';\n    font-weight: ' + props.theme.font.weight.standard + ';\n  ';
});

function Small(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      color = _ref.color,
      shade = _ref.shade;

  return _react2.default.createElement(
    SmallTag,
    { color: color, shade: shade, theme: theme },
    children
  );
}

Small.propTypes = {
  theme: _propTypes2.default.shape(),
  children: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string,
  shade: _propTypes2.default.number
};

Small.defaultProps = {
  theme: _kratedTheme2.default,
  color: 'grey',
  shade: 2
};

exports.default = Small;