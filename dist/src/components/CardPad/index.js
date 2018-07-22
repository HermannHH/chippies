'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Standard card container padding
 */

function CardPad(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _Pad2.default,
    { horizontal: { xs: 4 }, vertical: { xs: 4 } },
    children
  );
}
// import styled from 'styled-components';
// import ReactPlaceholder from 'react-placeholder';
// import kratedTheme from 'krated-theme';
// import { shevyConfig } from '../helpers';

CardPad.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired
};

exports.default = CardPad;

//# sourceMappingURL=index.js.map