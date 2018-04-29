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

var _reactSwitch = require('react-switch');

var _reactSwitch2 = _interopRequireDefault(_reactSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Toggle(_ref) {
  var theme = _ref.theme,
      id = _ref.id,
      checked = _ref.checked,
      handleChange = _ref.handleChange;

  return _react2.default.createElement(
    'label',
    { htmlFor: id },
    _react2.default.createElement(_reactSwitch2.default, {
      onChange: handleChange,
      checked: checked,
      id: id,
      offColor: theme.colors.grey[0],
      onColor: theme.colors.blue[0]
    })
  );
}

Toggle.propTypes = {
  id: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.shape().isRequired,
  checked: _propTypes2.default.bool.isRequired,
  handleChange: _propTypes2.default.func.isRequired
};

Toggle.defaultProps = {};

exports.default = (0, _styledComponents.withTheme)(Toggle);