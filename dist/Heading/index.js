'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n  line-height: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n'], ['\n  font-size: ', ';\n  line-height: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  line-height: ', ';\n  ', ';\n'], ['\n  font-size: ', ';\n  line-height: ', ';\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_helpers.shevyConfig);
var h1 = shevy.h1,
    h2 = shevy.h2,
    h3 = shevy.h3,
    h4 = shevy.h4,
    h5 = shevy.h5,
    h6 = shevy.h6;


var HTag = _styledComponents2.default.h1(_templateObject, h1.fontSize, h1.lineHeight, function (props) {
  return '\n    color: ' + props.theme.colors[props.color][props.shade] + ';\n    font-family: ' + props.theme.font.family + ';\n    font-weight: ' + props.theme.font.weight.bold + ';\n    margin: ' + (props.withMargin ? h1.marginBottom + ' 0px' : '0px') + ';\n  ';
});

var H2 = HTag.withComponent('h2');
var HTagTwo = H2.extend(_templateObject2, h2.fontSize, h2.lineHeight, function (props) {
  return '\n    margin: ' + (props.withMargin ? h2.marginBottom + ' 0px' : '0px') + ';\n  ';
});

var H3 = HTag.withComponent('h3');
var HTagThree = H3.extend(_templateObject2, h3.fontSize, h3.lineHeight, function (props) {
  return '\n    margin: ' + (props.withMargin ? h3.marginBottom + ' 0px' : '0px') + ';\n  ';
});

var H4 = HTag.withComponent('h4');
var HTagFour = H4.extend(_templateObject2, h4.fontSize, h4.lineHeight, function (props) {
  return '\n    margin: ' + (props.withMargin ? h4.marginBottom + ' 0px' : '0px') + ';\n  ';
});

var H5 = HTag.withComponent('h5');
var HTagFive = H5.extend(_templateObject2, h5.fontSize, h5.lineHeight, function (props) {
  return '\n    margin: ' + (props.withMargin ? h5.marginBottom + ' 0px' : '0px') + ';\n  ';
});

var H6 = HTag.withComponent('h6');
var HTagSix = H6.extend(_templateObject2, h6.fontSize, h6.lineHeight, function (props) {
  return '\n    margin: ' + (props.withMargin ? h6.marginBottom + ' 0px' : '0px') + ';\n  ';
});

function Heading(_ref) {
  var theme = _ref.theme,
      size = _ref.size,
      text = _ref.text,
      color = _ref.color,
      shade = _ref.shade,
      withMargin = _ref.withMargin;

  switch (size) {
    case '2':
      return _react2.default.createElement(
        HTagTwo,
        { color: color, shade: shade, theme: theme, withMargin: withMargin },
        text
      );
    case '3':
      return _react2.default.createElement(
        HTagThree,
        { color: color, shade: shade, theme: theme, withMargin: withMargin },
        text
      );
    case '4':
      return _react2.default.createElement(
        HTagFour,
        { color: color, shade: shade, theme: theme, withMargin: withMargin },
        text
      );
    case '5':
      return _react2.default.createElement(
        HTagFive,
        { color: color, shade: shade, theme: theme, withMargin: withMargin },
        text
      );
    case '6':
      return _react2.default.createElement(
        HTagSix,
        { color: color, shade: shade, theme: theme, withMargin: withMargin },
        text
      );
    default:
      return _react2.default.createElement(
        HTag,
        { color: color, shade: shade, theme: theme, withMargin: withMargin },
        text
      );
  }
}

Heading.propTypes = {
  theme: _propTypes2.default.shape().isRequired,
  text: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6']),
  color: _propTypes2.default.string,
  shade: _propTypes2.default.number,
  withMargin: _propTypes2.default.bool
};

Heading.defaultProps = {
  size: '1',
  color: 'black',
  shade: -1,
  withMargin: true
};

exports.default = (0, _styledComponents.withTheme)(Heading);