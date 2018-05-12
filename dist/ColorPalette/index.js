'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _Display = require('../Display');

var _Display2 = _interopRequireDefault(_Display);

var _PaletteBlock = require('../PaletteBlock');

var _PaletteBlock2 = _interopRequireDefault(_PaletteBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ColorPalette(_ref) {
  var theme = _ref.theme;

  var inverteds = ['black'];
  return _react2.default.createElement(
    'div',
    null,
    Object.keys(theme.colors).map(function (x) {
      return Object.keys(theme.colors[x]).map(function (y) {
        return _react2.default.createElement(
          _Display2.default,
          { key: x + '_' + y, type: 'inline-block' },
          _react2.default.createElement(_PaletteBlock2.default, {
            name: x + '(' + y + ')',
            color: x,
            shade: y,
            hex: theme.colors[x][y],
            inverse: inverteds.includes(x)
          })
        );
      });
    })
  );
}

ColorPalette.propTypes = {
  theme: _propTypes2.default.shape()
};

ColorPalette.defaultProps = {
  theme: _kratedTheme2.default
};

exports.default = ColorPalette;