'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100px;\n  height: ', ';\n  background-color: red;\n  animation: ', ' 0.3s linear;\n  transition: height 0.3s linear;\n  overflow: hidden;\n'], ['\n  width: 100px;\n  height: ', ';\n  background-color: red;\n  animation: ', ' 0.3s linear;\n  transition: height 0.3s linear;\n  overflow: hidden;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAnimations = require('react-animations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  show: _propTypes2.default.bool
};
var defaultProps = {
  show: false
};

var enter = (0, _styledComponents.keyframes)(_templateObject, _reactAnimations.fadeIn);
var exit = (0, _styledComponents.keyframes)(_templateObject, _reactAnimations.fadeOut);

var MenuWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.show ? '100px' : '0px';
}, function (props) {
  return props.show ? enter : exit;
});

function MobileNavMenu(_ref) {
  var show = _ref.show;

  return _react2.default.createElement(
    MenuWrapper,
    { show: show },
    'Hello'
  );
}

MobileNavMenu.propTypes = propTypes;
MobileNavMenu.defaultProps = defaultProps;

exports.default = MobileNavMenu;

//# sourceMappingURL=index.js.map