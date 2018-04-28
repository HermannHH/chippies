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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImageTag = _styledComponents2.default.img(_templateObject, function (props) {
  return '\n    width: ' + (props.width ? props.width + 'px' : 'auto') + ';\n    height: ' + (props.height ? props.height + 'px' : 'auto') + ';\n  ';
});

/**
 * Used for normal images. Will not be progressive
 */

function Image(_ref) {
  var width = _ref.width,
      height = _ref.height,
      src = _ref.src;

  return _react2.default.createElement(ImageTag, { width: width, height: height, src: src });
}

Image.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  src: _propTypes2.default.string.isRequired
};

Image.defaultProps = {
  width: null,
  height: null
};

exports.default = Image;