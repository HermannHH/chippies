'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  overflow: hidden;\n'], ['\n  ', ';\n  overflow: hidden;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n    box-shadow: ' + props.theme.box.shadow.medium + ';\n    border-radius: ' + props.theme.borders.radius + 'px;\n    background-color: ' + props.theme.colors.white['0'] + ';\n    &:hover {\n      ' + (props.onClick && 'cursor: pointer;') + ';\n    };\n    position: relative;\n  ';
});

function Card(_ref) {
  var handleClick = _ref.handleClick,
      children = _ref.children,
      theme = _ref.theme;

  return _react2.default.createElement(
    CardWrapper,
    { theme: theme, onClick: handleClick },
    children
  );
}

Card.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  handleClick: _propTypes2.default.func,
  theme: _propTypes2.default.shape()
};

Card.defaultProps = {
  theme: _kratedTheme2.default,
  handleClick: undefined
};

exports.default = Card;