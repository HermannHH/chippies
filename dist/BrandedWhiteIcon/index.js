'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _branded_white_icon = require('./branded_white_icon.svg');

var _branded_white_icon2 = _interopRequireDefault(_branded_white_icon);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BrandedWhiteIcon(_ref) {
  var size = _ref.size;

  var widths = {
    1: 300,
    2: 200,
    3: 150,
    4: 100,
    5: 80,
    6: 60
  };
  return _react2.default.createElement(_Image2.default, { src: _branded_white_icon2.default, width: widths[size] });
}

BrandedWhiteIcon.propTypes = {
  size: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6'])
};

BrandedWhiteIcon.defaultProps = {
  size: '3'
};

exports.default = BrandedWhiteIcon;