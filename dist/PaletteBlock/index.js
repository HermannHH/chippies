'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ColorBlock = require('../ColorBlock');

var _ColorBlock2 = _interopRequireDefault(_ColorBlock);

var _ColorDescription = require('../ColorDescription');

var _ColorDescription2 = _interopRequireDefault(_ColorDescription);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PaletteBlock(_ref) {
  var hex = _ref.hex,
      name = _ref.name,
      inverse = _ref.inverse;

  return _react2.default.createElement(
    _ColorBlock2.default,
    { hex: hex },
    _react2.default.createElement(
      _Pad2.default,
      { all: { xs: 1 }, top: { xs: 3 } },
      _react2.default.createElement(_ColorDescription2.default, { name: name, hex: hex, inverse: inverse })
    )
  );
}

PaletteBlock.propTypes = {
  name: _propTypes2.default.string.isRequired,
  hex: _propTypes2.default.string.isRequired,
  inverse: _propTypes2.default.bool
};

PaletteBlock.defaultProps = {
  inverse: false
};

exports.default = PaletteBlock;