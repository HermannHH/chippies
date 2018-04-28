'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponentsSpacing = require('styled-components-spacing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adds responsive margin around child / children
 */
function Mrg(_ref) {
  var all = _ref.all,
      children = _ref.children,
      horizontal = _ref.horizontal,
      vertical = _ref.vertical,
      top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;

  return _react2.default.createElement(
    _styledComponentsSpacing.Margin,
    {
      all: all,
      horizontal: horizontal,
      vertical: vertical,
      top: top,
      right: right,
      bottom: bottom,
      left: left
    },
    children
  );
}

Mrg.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  all: _propTypes2.default.shape({
    xs: _propTypes2.default.number.isRequired,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    xl: _propTypes2.default.number
  }),
  horizontal: _propTypes2.default.shape({
    xs: _propTypes2.default.number.isRequired,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    xl: _propTypes2.default.number
  }),
  vertical: _propTypes2.default.shape({
    xs: _propTypes2.default.number.isRequired,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    xl: _propTypes2.default.number
  }),
  top: _propTypes2.default.shape({
    xs: _propTypes2.default.number.isRequired,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    xl: _propTypes2.default.number
  }),
  right: _propTypes2.default.shape({
    xs: _propTypes2.default.number.isRequired,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    xl: _propTypes2.default.number
  }),
  bottom: _propTypes2.default.shape({
    xs: _propTypes2.default.number.isRequired,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    xl: _propTypes2.default.number
  }),
  left: _propTypes2.default.shape({
    xs: _propTypes2.default.number.isRequired,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    xl: _propTypes2.default.number
  })
};

Mrg.defaultProps = {
  all: null,
  horizontal: null,
  vertical: null,
  top: null,
  right: null,
  bottom: null,
  left: null
};

exports.default = Mrg;