'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n    ' + (props.radius && 'border-radius: ' + props.theme.borders.radius + 'px') + ';\n    ' + (props.all && 'border: thin solid ' + props.theme.colors[props.color][props.shade]) + ';\n    ' + (props.top && 'border-top: thin solid ' + props.theme.colors[props.color][props.shade]) + ';\n    ' + (props.right && 'border-right: thin solid ' + props.theme.colors[props.color][props.shade]) + ';\n    ' + (props.bottom && 'border-bottom: thin solid ' + props.theme.colors[props.color][props.shade]) + ';\n    ' + (props.left && 'border-left: thin solid ' + props.theme.colors[props.color][props.shade]) + ';\n  ';
});

function Border(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      all = _ref.all,
      top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      radius = _ref.radius,
      color = _ref.color,
      shade = _ref.shade;

  return _react2.default.createElement(
    Container,
    {
      theme: theme,
      all: all,
      top: top,
      right: right,
      bottom: bottom,
      left: left,
      radius: radius,
      color: color,
      shade: shade
    },
    children
  );
}

Border.propTypes = {
  theme: _propTypes2.default.shape().isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
  all: _propTypes2.default.bool,
  top: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  bottom: _propTypes2.default.bool,
  left: _propTypes2.default.bool,
  radius: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  shade: _propTypes2.default.number
};

Border.defaultProps = {
  children: null,
  radius: false,
  all: false,
  top: false,
  right: false,
  bottom: false,
  left: false,
  color: 'grey',
  shade: -1
};

exports.default = (0, _styledComponents.withTheme)(Border);