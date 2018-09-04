'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.95;\n  filter: blur(5px);\n  z-index: 9;\n  overflow: hidden;\n  ', ';\n'], ['\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.95;\n  filter: blur(5px);\n  z-index: 9;\n  overflow: hidden;\n  ', ';\n']);

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

var propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  theme: _propTypes2.default.shape({})
};
var defaultProps = {
  theme: _kratedTheme2.default
};

var BlurWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n    background-color: ' + props.theme.colors.grey['-2'] + ';\n  ';
});

function BlurOverlay(_ref) {
  var children = _ref.children,
      theme = _ref.theme;

  return _react2.default.createElement(
    BlurWrapper,
    { theme: theme },
    children
  );
}

BlurOverlay.propTypes = propTypes;
BlurOverlay.defaultProps = defaultProps;

exports.default = BlurOverlay;

//# sourceMappingURL=index.js.map