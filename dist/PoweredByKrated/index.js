'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _specialPoweredByKrated = require('./special-powered-by-krated-3.png');

var _specialPoweredByKrated2 = _interopRequireDefault(_specialPoweredByKrated);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styled from 'styled-components';

function PoweredByKrated(_ref) {
  var size = _ref.size;

  var widths = {
    1: 300,
    2: 200,
    3: 150
  };
  return _react2.default.createElement(
    'a',
    { href: 'https://krated.com', target: '_blank', rel: 'noopener noreferrer' },
    _react2.default.createElement(_Image2.default, { src: _specialPoweredByKrated2.default, width: widths[size] })
  );
}

PoweredByKrated.propTypes = {
  size: _propTypes2.default.oneOf(['1', '2', '3'])
};

PoweredByKrated.defaultProps = {
  size: '3'
};

exports.default = PoweredByKrated;