'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: relative;\n'], ['\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: relative;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VerticalAlign = _styledComponents2.default.div(_templateObject);

function VerticalMiddle(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    VerticalAlign,
    null,
    children
  );
}

VerticalMiddle.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired
};

VerticalMiddle.defaultProps = {};

exports.default = VerticalMiddle;