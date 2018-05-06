'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n  line-height: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n'], ['\n  font-size: ', ';\n  line-height: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n']);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_helpers.shevyConfig);
var content = shevy.content;


var AnchorTag = _styledComponents2.default.a(_templateObject, content.fontSize, content.lineHeight, function (props) {
  return '\n    color: ' + props.theme.colors.blue['0'] + ';\n    font-weight: ' + props.theme.font.weight.standard + ';\n    font-family: ' + props.theme.font.family + ';\n\n    &:hover {\n      cursor: pointer;\n      color: ' + props.theme.colors.grey['2'] + ';\n    };\n  ';
});

function Hyperlink(_ref) {
  var theme = _ref.theme,
      text = _ref.text,
      href = _ref.href,
      handleClick = _ref.handleClick;

  return _react2.default.createElement(
    AnchorTag,
    { onClick: handleClick, href: href, theme: theme },
    text
  );
}

Hyperlink.propTypes = {
  theme: _propTypes2.default.shape(),
  text: _propTypes2.default.string.isRequired,
  href: _propTypes2.default.string,
  handleClick: (0, _reactRequiredIf2.default)(_propTypes2.default.func, function (props) {
    return !props.href;
  })
};

Hyperlink.defaultProps = {
  theme: _kratedTheme2.default,
  href: undefined,
  handleClick: undefined
};

exports.default = Hyperlink;