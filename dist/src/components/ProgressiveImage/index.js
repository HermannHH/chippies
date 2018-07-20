'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: ', ';\n  width: ', ';\n  background-color: ', ';\n  ', ';\n  background-size: ', ';\n  background-position: center center;\n  background-repeat: no-repeat;\n  ', ';\n'], ['\n  height: ', ';\n  width: ', ';\n  background-color: ', ';\n  ', ';\n  background-size: ', ';\n  background-position: center center;\n  background-repeat: no-repeat;\n  ', ';\n']);

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

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.height;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.colors.grey['-1'];
}, function (props) {
  return props.rounded && 'border-radius: 50%';
}, function (props) {
  return props.size;
}, function (props) {
  return '\n    background-image: url(' + props.src + ');\n  ';
});

/**
 * Progressive image uses css background to cover or contain given div with src image
 */

function ProgressiveImage(props) {
  return _react2.default.createElement(Wrapper, props);
}

ProgressiveImage.propTypes = {
  src: _propTypes2.default.string.isRequired,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['cover', 'contain']),
  rounded: _propTypes2.default.bool,
  theme: _propTypes2.default.shape()
};

ProgressiveImage.defaultProps = {
  theme: _kratedTheme2.default,
  height: '100%',
  width: '100%',
  size: 'cover',
  rounded: false
};

exports.default = ProgressiveImage;

//# sourceMappingURL=index.js.map