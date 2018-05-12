'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Block = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n    width: ' + props.width + ';\n    height: ' + props.height + ';\n    background-color: ' + props.theme.colors[props.color][props.shade] + ';\n    display: block;\n  ';
});

function ColorBlock(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color,
      children = _ref.children,
      shade = _ref.shade,
      theme = _ref.theme;

  return _react2.default.createElement(
    Block,
    { width: width, height: height, color: color, shade: shade, theme: theme },
    children
  );
}

ColorBlock.propTypes = {
  theme: _propTypes2.default.shape(),
  color: _propTypes2.default.string.isRequired,
  shade: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string
};

ColorBlock.defaultProps = {
  theme: _kratedTheme2.default,
  width: '120px',
  height: '120px',
  children: null
};

exports.default = ColorBlock;