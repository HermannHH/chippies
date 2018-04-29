'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Small = require('../Small');

var _Small2 = _interopRequireDefault(_Small);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputErrors(_ref) {
  var errors = _ref.errors,
      color = _ref.color,
      shade = _ref.shade;

  return _react2.default.createElement(
    _Small2.default,
    { color: color, shade: shade },
    errors.join(', ')
  );
}

InputErrors.propTypes = {
  errors: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  color: _propTypes2.default.string,
  shade: _propTypes2.default.string
};

InputErrors.defaultProps = {
  color: 'red',
  shade: '0'
};

exports.default = InputErrors;