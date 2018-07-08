'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n  line-height: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n'], ['\n  font-size: ', ';\n  line-height: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  ', ';\n  ', ';\n'], ['\n  display: inline-block;\n  ', ';\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _reactRequiredIf = require('react-required-if');

var _reactRequiredIf2 = _interopRequireDefault(_reactRequiredIf);

var _helpers = require('../helpers');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_helpers.shevyConfig);
var content = shevy.content,
    bs = shevy.baseSpacing;


var AnchorTag = _styledComponents2.default.a(_templateObject, content.fontSize, content.lineHeight, function (props) {
  return '\n    color: ' + props.theme.colors[props.color]['0'] + ';\n    font-weight: ' + props.theme.font.weight.standard + ';\n    font-family: ' + props.theme.font.family + ';\n\n    &:hover {\n      cursor: pointer;\n      color: ' + props.theme.colors[props.hoverColor][props.hoverShade] + ';\n      > div {\n        > svg {\n          > path {\n            fill: ' + props.theme.colors[props.hoverColor][props.hoverShade] + ';\n          }\n        };\n      };\n    };\n  ';
});

var IconContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.iconPosition === 'left' && 'padding-right: ' + bs(0.2);
}, function (props) {
  return props.iconPosition === 'right' && 'padding-left: ' + bs(0.2);
});

function Hyperlink(_ref) {
  var theme = _ref.theme,
      text = _ref.text,
      href = _ref.href,
      handleClick = _ref.handleClick,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      buttonPad = _ref.buttonPad,
      color = _ref.color,
      hoverColor = _ref.hoverColor,
      hoverShade = _ref.hoverShade;

  var anchor = _react2.default.createElement(
    AnchorTag,
    {
      onClick: handleClick,
      href: href,
      theme: theme,
      buttonPad: buttonPad,
      color: color,
      hoverColor: hoverColor,
      hoverShade: hoverShade
    },
    icon && iconPosition === 'left' && _react2.default.createElement(
      IconContainer,
      { iconPosition: iconPosition },
      _react2.default.createElement(_Icon2.default, {
        icon: icon,
        size: 'sm',
        color: color
      })
    ),
    text,
    icon && iconPosition === 'right' && _react2.default.createElement(
      IconContainer,
      { iconPosition: iconPosition },
      _react2.default.createElement(_Icon2.default, {
        icon: icon,
        size: 'sm',
        color: color
      })
    )
  );

  var body = anchor;
  if (buttonPad) {
    body = _react2.default.createElement(
      _Pad2.default,
      { vertical: { xs: 2 }, horizontal: { xs: 4 } },
      anchor
    );
  }
  return body;
}

Hyperlink.propTypes = {
  theme: _propTypes2.default.shape(),
  text: _propTypes2.default.string,
  href: _propTypes2.default.string,
  handleClick: (0, _reactRequiredIf2.default)(_propTypes2.default.func, function (props) {
    return !props.href;
  }),
  icon: _propTypes2.default.string,
  iconPosition: _propTypes2.default.oneOf(['left', 'right']),
  buttonPad: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(['blue', 'grey']),
  hoverColor: _propTypes2.default.oneOf(['blue', 'grey', 'red']),
  hoverShade: _propTypes2.default.string
};

Hyperlink.defaultProps = {
  theme: _kratedTheme2.default,
  href: undefined,
  handleClick: undefined,
  icon: undefined,
  iconPosition: 'left',
  buttonPad: false,
  color: 'blue',
  hoverColor: 'grey',
  hoverShade: '2',
  text: undefined
};

exports.default = Hyperlink;