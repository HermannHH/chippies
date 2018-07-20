'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../helpers');

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import kratedTheme from 'krated-theme';

function InspireMessageHeading(_ref) {
  var size = _ref.size,
      color = _ref.color,
      shade = _ref.shade;

  return _react2.default.createElement(_Heading2.default, { text: (0, _helpers.randomMessage)(), size: size, color: color, shade: shade });
}

InspireMessageHeading.propTypes = {
  size: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  color: _propTypes2.default.string.isRequired,
  shade: _propTypes2.default.number.isRequired
};

InspireMessageHeading.defaultProps = {};

exports.default = InspireMessageHeading;

//# sourceMappingURL=index.js.map