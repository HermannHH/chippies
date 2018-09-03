'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _branded_block_icon = require('./branded_block_icon.svg');

var _branded_block_icon2 = _interopRequireDefault(_branded_block_icon);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BrandedBlockIcon(_ref) {
  var size = _ref.size;

  var widths = {
    1: 300,
    2: 200,
    3: 150,
    4: 100,
    5: 80,
    6: 60
  };
  return _react2.default.createElement(_Image2.default, { src: _branded_block_icon2.default, width: widths[size] });
}

BrandedBlockIcon.propTypes = {
  size: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6'])
};

BrandedBlockIcon.defaultProps = {
  size: '3'
};

exports.default = BrandedBlockIcon;