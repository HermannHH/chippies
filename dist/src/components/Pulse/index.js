'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation: 1.5s ', ' infinite;\n'], ['\n  animation: 1.5s ', ' infinite;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAnimations = require('react-animations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var pulseAnimation = (0, _styledComponents.keyframes)(_templateObject, _reactAnimations.pulse);

var PulsingContainer = _styledComponents2.default.div(_templateObject2, pulseAnimation);

function Pulse(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    PulsingContainer,
    null,
    children
  );
}

Pulse.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired
};

exports.default = Pulse;

//# sourceMappingURL=index.js.map