'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Injects the Krated theme found here (https://github.com/HermannHH/krated-theme) into components. Can roll own theme wrapper if theme change is required
 */

function ThemeWrapper(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _kratedTheme2.default },
    children
  );
}

ThemeWrapper.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired
};

exports.default = ThemeWrapper;