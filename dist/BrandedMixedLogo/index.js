'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _branded_mixed_logo = require('./branded_mixed_logo.svg');

var _branded_mixed_logo2 = _interopRequireDefault(_branded_mixed_logo);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BrandedMixedLogo(_ref) {
  var size = _ref.size;

  var widths = {
    1: 300,
    2: 200,
    3: 150
  };
  return _react2.default.createElement(_Image2.default, { src: _branded_mixed_logo2.default, width: widths[size] });
}

BrandedMixedLogo.propTypes = {
  size: _propTypes2.default.oneOf(['1', '2', '3'])
};

BrandedMixedLogo.defaultProps = {
  size: '3'
};

exports.default = BrandedMixedLogo;