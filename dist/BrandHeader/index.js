'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ImageBlock = require('../ImageBlock');

var _ImageBlock2 = _interopRequireDefault(_ImageBlock);

var _BrandedMixedLogo = require('../BrandedMixedLogo');

var _BrandedMixedLogo2 = _interopRequireDefault(_BrandedMixedLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styled from 'styled-components';

function BrandHeader(_ref) {
  var size = _ref.size,
      position = _ref.position;

  return _react2.default.createElement(
    _ImageBlock2.default,
    { position: position },
    _react2.default.createElement(_BrandedMixedLogo2.default, { size: size })
  );
}

BrandHeader.propTypes = {
  size: _propTypes2.default.oneOf(['1', '2', '3']),
  position: _propTypes2.default.oneOf(['left', 'center', 'right'])
};

BrandHeader.defaultProps = {
  size: '3',
  position: 'center'
};

exports.default = BrandHeader;