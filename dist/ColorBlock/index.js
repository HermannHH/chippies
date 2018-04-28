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

var Block = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n    width: ' + props.width + 'px;\n    height: ' + props.width + 'px;\n    background-color: ' + props.hex + ';\n    display: block;\n  ';
});

function ColorBlock(_ref) {
  var width = _ref.width,
      height = _ref.height,
      hex = _ref.hex,
      children = _ref.children;

  return _react2.default.createElement(
    Block,
    { width: width, height: height, hex: hex },
    children
  );
}

ColorBlock.propTypes = {
  hex: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number
};

ColorBlock.defaultProps = {
  width: 120,
  height: 120,
  children: null
};

exports.default = ColorBlock;