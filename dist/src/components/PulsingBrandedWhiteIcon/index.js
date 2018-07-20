'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pulse = require('../Pulse');

var _Pulse2 = _interopRequireDefault(_Pulse);

var _BrandedWhiteIcon = require('../BrandedWhiteIcon');

var _BrandedWhiteIcon2 = _interopRequireDefault(_BrandedWhiteIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PropTypes from 'prop-types';

function PulsingBrandedWhiteIcon() {
  return _react2.default.createElement(
    _Pulse2.default,
    null,
    _react2.default.createElement(_BrandedWhiteIcon2.default, null)
  );
}

// PulsingBrandedWhiteIcon.propTypes = {
//   message: PropTypes.string.isRequired,
// };

exports.default = PulsingBrandedWhiteIcon;

//# sourceMappingURL=index.js.map