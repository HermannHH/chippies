'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    bottom: -80px;\n  }\n  to {\n    transform: 0px;\n  }\n'], ['\n  from {\n    bottom: -80px;\n  }\n  to {\n    transform: 0px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    bottom: 0px;\n  }\n  to {\n    bottom: -80px;\n  }\n'], ['\n  from {\n    bottom: 0px;\n  }\n  to {\n    bottom: -80px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  ', ';\n'], ['\n  width: 100%;\n  ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  z-index: 2;\n  box-sizing: border-box;\n  ', ';\n'], ['\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  z-index: 2;\n  box-sizing: border-box;\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _ColorBlock = require('../ColorBlock');

var _ColorBlock2 = _interopRequireDefault(_ColorBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SlideInUpAnimation = (0, _styledComponents.keyframes)(_templateObject);

var SlideOutDownAnimation = (0, _styledComponents.keyframes)(_templateObject2);

var Wrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return '\n    height: ' + props.theme.slideBar.height + 'px;\n    box-shadow: ' + props.theme.box.shadow.medium + ';\n    position: fixed;\n    left: 0px;\n    bottom: ' + (props.show ? '0px' : '-80px') + ';\n    animation: ' + (props.show ? SlideInUpAnimation : SlideOutDownAnimation) + ' 0.5s linear;\n    z-index: 1;\n    box-sizing: border-box;\n  ';
});

var Container = _styledComponents2.default.div(_templateObject4, function (props) {
  return '\n    height: ' + props.theme.slideBar.height + 'px;\n  ';
});

function SlideBar(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      show = _ref.show;

  return _react2.default.createElement(
    Wrapper,
    {
      theme: theme,
      show: show
    },
    _react2.default.createElement(
      _ColorBlock2.default,
      { color: 'blue', shade: '0', width: '100%', height: theme.slideBar.height + 'px' },
      _react2.default.createElement(
        Container,
        {
          theme: theme
        },
        children
      )
    )
  );
}

SlideBar.propTypes = {
  theme: _propTypes2.default.shape({
    slideBar: _propTypes2.default.shape({
      height: _propTypes2.default.number
    })
  }),
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
  show: _propTypes2.default.bool.isRequired
};

SlideBar.defaultProps = {
  theme: _kratedTheme2.default,
  children: null
};

exports.default = SlideBar;

//# sourceMappingURL=index.js.map