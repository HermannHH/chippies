'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  ', ';\n  ', ';\n'], ['\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n  width: 90%;\n  ', ';\n  ', ';\n  ', ';\n\n  ', ';\n\n'], ['\n  ', ';\n  width: 90%;\n  ', ';\n  ', ';\n  ', ';\n\n  ', ';\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _helpers = require('../helpers');

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return !props.topCoords && '\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  ';
}, function (props) {
  return !props.hasContent && '\n     background-color: ' + props.theme.colors.red['0'] + ';\n  ';
});

var Container = _styledComponents2.default.div(_templateObject2, function (props) {
  return !props.topCoords && '\n    display: block;\n    margin: 0 auto;\n  ';
}, function (props) {
  return !props.compressed && '\n    ' + (props.device === 'tablet' && 'width: 80%') + ';\n    ' + (props.device === 'desktop' && 'width: 80%') + ';\n    ' + (props.device === 'large_desktop' && 'width: 70%') + ';\n  ';
}, function (props) {
  return props.compressed && '\n    ' + (props.device === 'tablet' && 'width: 60%') + ';\n    ' + (props.device === 'desktop' && 'width: 50%') + ';\n    ' + (props.device === 'large_desktop' && 'width: 50%') + ';\n  ';
}, function (props) {
  return !props.hasContent && '\n     background-color: ' + props.theme.colors.blue['0'] + ';\n     height: 10%;\n  ';
}, function (props) {
  return props.topCoords && '\n    display: block;\n    margin: 0 auto;\n    margin-top: ' + props.topCoords.phone + 'px;\n    height: 400px;\n  ';
});

/**
 * Used for normal LonelyIslands. Will not be progressive
 */

function LonelyIsland(_ref) {
  var device = _ref.device,
      compressed = _ref.compressed,
      topCoords = _ref.topCoords,
      children = _ref.children,
      theme = _ref.theme;

  return _react2.default.createElement(
    Wrapper,
    { topCoords: topCoords, hasContent: children, theme: theme },
    _react2.default.createElement(
      _Pad2.default,
      {
        all: {
          xs: 1
        }
      },
      _react2.default.createElement(
        Container,
        { device: device, compressed: compressed, hasContent: children, theme: theme, topCoords: topCoords },
        children
      )
    )
  );
}

LonelyIsland.propTypes = {
  device: _propTypes2.default.oneOf(['phone', 'large_desktop', 'desktop', 'tablet', 'landscape_phone']).isRequired,
  compressed: _propTypes2.default.bool,
  topCoords: _propTypes2.default.shape({
    phone: _propTypes2.default.number.isRequired,
    large_desktop: _propTypes2.default.number.isRequired,
    desktop: _propTypes2.default.number.isRequired,
    tablet: _propTypes2.default.number.isRequired,
    landscape_phone: _propTypes2.default.number.isRequired
  }),
  children: _propTypes2.default.element,
  theme: _propTypes2.default.shape()
};

LonelyIsland.defaultProps = {
  theme: _kratedTheme2.default,
  compressed: false,
  topCoords: null,
  children: null
};

exports.default = (0, _helpers.viewPort)(LonelyIsland);