'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Mrg = require('../Mrg');

var _Mrg2 = _interopRequireDefault(_Mrg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wraps form items such as inputs
 */

function FormInputContainer(_ref) {
  var children = _ref.children,
      position = _ref.position;

  return _react2.default.createElement(
    _Mrg2.default,
    { vertical: { xs: 3 }, left: position === 'right' && { lg: 2 }, right: position === 'left' && { lg: 2 } },
    children
  );
}

FormInputContainer.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  position: _propTypes2.default.oneOf(['left', 'right'])
};

FormInputContainer.defaultProps = {
  position: undefined
};

exports.default = FormInputContainer;