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

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n    display: ' + props.type + ';\n  ';
});

/**
 * Wraps any element/s in a display helper such as block, inline, inline-block, hidden etc.
 */

function Display(_ref) {
  var children = _ref.children,
      type = _ref.type;

  return _react2.default.createElement(
    Container,
    { type: type },
    children
  );
}

Display.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  type: _propTypes2.default.oneOf(['inline', 'inline-block', 'block']).isRequired
};

exports.default = Display;