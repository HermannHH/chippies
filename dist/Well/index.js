'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Border = require('../Border');

var _Border2 = _interopRequireDefault(_Border);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styled, { withTheme } from 'styled-components';

function Well(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _Border2.default,
    { all: true, radius: true },
    _react2.default.createElement(
      _Pad2.default,
      { vertical: { xs: 4 }, horizontal: { xs: 5 } },
      children
    )
  );
}

Well.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired
};

exports.default = Well;