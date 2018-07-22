'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: rotateZ(0deg) translateX(', 'px);\n  }\n\n  to {\n    transform: rotateZ(360deg) translateX(', 'px);\n  }\n'], ['\n  from {\n    transform: rotateZ(0deg) translateX(', 'px);\n  }\n\n  to {\n    transform: rotateZ(360deg) translateX(', 'px);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  border-radius: 50%\n  border: solid 2px;\n  ', ';\n'], ['\n  position: relative;\n  border-radius: 50%\n  border: solid 2px;\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border-radius: 50%\n  position: absolute;\n  ', ';\n'], ['\n  border-radius: 50%\n  position: absolute;\n  ', ';\n']);

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

var colors = ['red', 'blue', 'purple', 'ocean', 'green', 'yellow'];

var propTypes = {
  atomRadius: _propTypes2.default.number.isRequired,
  electronRadius: _propTypes2.default.number.isRequired,
  electronColor: _propTypes2.default.oneOf(colors),
  orbitTime: _propTypes2.default.number,
  theme: _propTypes2.default.shape({})
};

var defaultProps = {
  electronColor: colors[Math.floor(Math.random() * colors.length)],
  orbitTime: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
  theme: _kratedTheme2.default
};

var orbit = function orbit(atomRadius) {
  return (0, _styledComponents.keyframes)(_templateObject, atomRadius, atomRadius);
};

var OrbitWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return '\n    width: ' + 2 * props.atomRadius + 'px;\n    height: ' + 2 * props.atomRadius + 'px;\n    border-color: ' + props.theme.colors.white['1'] + '\n  ';
});

var Electron = _styledComponents2.default.div(_templateObject3, function (props) {
  return '\n    width: ' + 2 * props.electronRadius + 'px;\n    height: ' + 2 * props.electronRadius + 'px;\n    top: ' + (props.atomRadius - props.electronRadius) + 'px;\n    left: ' + (props.atomRadius - props.electronRadius) + 'px;\n    animation: ' + orbit(props.atomRadius) + ' ' + props.orbitTime + 's linear infinite;\n    background-color: ' + props.theme.colors[props.electronColor]['0'] + ';\n  ';
});

function OrbitChannel(_ref) {
  var atomRadius = _ref.atomRadius,
      electronRadius = _ref.electronRadius,
      electronColor = _ref.electronColor,
      orbitTime = _ref.orbitTime,
      theme = _ref.theme;

  return _react2.default.createElement(
    OrbitWrapper,
    { atomRadius: atomRadius, theme: theme },
    _react2.default.createElement(Electron, {
      electronColor: electronColor,
      electronRadius: electronRadius,
      atomRadius: atomRadius,
      orbitTime: orbitTime,
      theme: theme
    })
  );
}

OrbitChannel.propTypes = propTypes;
OrbitChannel.defaultProps = defaultProps;

exports.default = OrbitChannel;

//# sourceMappingURL=index.js.map