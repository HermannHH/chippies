'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n', '\n'], ['\n  position: relative;\n', '\n']);

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

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonWrapper = _styledComponents2.default.button(_templateObject, function (props) {
  return '\n    border-radius: ' + props.theme.borders.radius + 'px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    white-space: nowrap;\n    display: inline-block;\n    font-family: ' + props.theme.font.family + ';\n    font-weight: ' + props.theme.font.weight.standard + ';\n    text-transform: uppercase;\n    text-decoration: none;\n    user-select: none;\n    ' + (props.fill && 'width: 100%') + ';\n    ' + (props.raised && 'box-shadow: ' + props.theme.box.shadow.shallow) + ';\n  ';
});

function Button(_ref) {
  var theme = _ref.theme,
      handleClick = _ref.handleClick,
      loadingText = _ref.loadingText,
      disabled = _ref.disabled,
      type = _ref.type,
      text = _ref.text,
      fill = _ref.fill,
      raised = _ref.raised;

  return _react2.default.createElement(
    ButtonWrapper,
    {
      theme: theme,
      onClick: handleClick,
      disabled: loadingText || disabled,
      type: type,
      fill: fill,
      raised: raised
    },
    _react2.default.createElement(
      _Pad2.default,
      { vertical: { xs: 2 }, horizontal: { xs: 4 } },
      !disabled && _react2.default.createElement(_reactInk2.default, null),
      _react2.default.createElement(_Label2.default, { text: loadingText || text })
    )
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
  fill: _propTypes2.default.bool,
  raised: _propTypes2.default.bool
};

Button.defaultProps = {
  handleClick: undefined,
  disabled: false,
  loadingText: undefined,
  type: 'button',
  fill: false,
  raised: false
};

exports.default = (0, _styledComponents.withTheme)(Button);