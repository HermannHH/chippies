'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  position: relative;\n', '\n'], ['\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  position: relative;\n', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRequiredIf = require('react-required-if');

var _reactRequiredIf2 = _interopRequireDefault(_reactRequiredIf);

var _reactInk = require('react-ink');

var _reactInk2 = _interopRequireDefault(_reactInk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonWrapper = _styledComponents2.default.button(_templateObject, function (props) {
  return '\n    outline: none;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    white-space: nowrap;\n    display: inline-block;\n    height: 40px;\n    line-height: 40px;\n    padding: 0  ' + props.theme.padding.small + 'px;\n    box-shadow: ' + props.theme.box.shadow.shallow + ';\n    border-radius: ' + props.theme.border.radius + 'px;\n    font-family: ' + props.theme.font.family + ';\n    font-weight: ' + props.theme.font.weight.standard + ';\n    background-color: ' + props.theme.color.brinkPink.standard + ';\n    color: ' + props.theme.color.white.standard + ';\n    text-transform: uppercase;\n    font-size: 15px;\n    letter-spacing: .025em;\n    text-decoration: none;\n    min-width: 184px;\n    user-select: none;\n    ' + (props.fill && 'width: 100%') + ';\n    &:disabled {\n      background-color: ' + props.theme.color.grey.lighten + ';\n      border: ' + ('thin solid ' + props.theme.color.grey.lighten) + ';\n      color: ' + props.theme.color.grey.standard + ';\n      box-shadow: none;\n      cursor: not-allowed;\n    }\n  ';
});

function Button(_ref) {
  var theme = _ref.theme,
      handleClick = _ref.handleClick,
      loadingText = _ref.loadingText,
      disabled = _ref.disabled,
      type = _ref.type,
      text = _ref.text,
      fill = _ref.fill;

  return _react2.default.createElement(
    ButtonWrapper,
    {
      theme: theme,
      onClick: handleClick,
      disabled: loadingText || disabled,
      type: type,
      fill: fill
    },
    !disabled && _react2.default.createElement(_reactInk2.default, null),
    loadingText || text
  );
};

Button.propTypes = {
  theme: _propTypes2.default.shape().isRequired,
  text: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  handleClick: (0, _reactRequiredIf2.default)(_propTypes2.default.func, function (props) {
    return props.type !== 'submit';
  }),
  loadingText: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['submit', 'button']),
  fill: _propTypes2.default.bool
};

Button.defaultProps = {
  handleClick: undefined,
  disabled: false,
  loadingText: undefined,
  type: 'button',
  fill: false
};

exports.default = (0, _styledComponents.withTheme)(Button);