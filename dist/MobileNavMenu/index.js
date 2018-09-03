'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n'], ['\n  cursor: pointer;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  animation: ', ' 0.3s linear;\n  background-color: ', ';\n  transition: height 0.3s linear;\n  overflow: hidden;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: 12;\n'], ['\n  width: ', ';\n  height: ', ';\n  animation: ', ' 0.3s linear;\n  background-color: ', ';\n  transition: height 0.3s linear;\n  overflow: hidden;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: 12;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAnimations = require('react-animations');

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _EscapeButton = require('../EscapeButton');

var _EscapeButton2 = _interopRequireDefault(_EscapeButton);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _Hyperlink = require('../Hyperlink');

var _Hyperlink2 = _interopRequireDefault(_Hyperlink);

var _viewPort = require('../viewPort');

var _viewPort2 = _interopRequireDefault(_viewPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  show: _propTypes2.default.bool,
  closeMobileNavMenu: _propTypes2.default.func.isRequired,
  openMobileNavMenu: _propTypes2.default.func.isRequired,
  height: _propTypes2.default.number.isRequired,
  width: _propTypes2.default.number.isRequired,
  theme: _propTypes2.default.shape({}),
  linkItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    text: _propTypes2.default.string,
    handleClick: _propTypes2.default.func,
    type: _propTypes2.default.oneOf(['button'])
  })).isRequired
};
var defaultProps = {
  show: false,
  theme: _kratedTheme2.default
};

var enter = (0, _styledComponents.keyframes)(_templateObject, _reactAnimations.fadeIn);
var exit = (0, _styledComponents.keyframes)(_templateObject, _reactAnimations.fadeOut);

var IconWrapper = _styledComponents2.default.div(_templateObject2);

var MenuWrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.width + 'px';
}, function (props) {
  return props.show ? props.height + 'px' : '0px';
}, function (props) {
  return props.show ? enter : exit;
}, function (props) {
  return props.theme.colors.white['0'];
});

function MobileNavMenu(_ref) {
  var theme = _ref.theme,
      linkItems = _ref.linkItems,
      height = _ref.height,
      width = _ref.width,
      show = _ref.show,
      openMobileNavMenu = _ref.openMobileNavMenu,
      closeMobileNavMenu = _ref.closeMobileNavMenu;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      IconWrapper,
      { onClick: openMobileNavMenu },
      _react2.default.createElement(_Icon2.default, { icon: 'faBars', size: 'lg' })
    ),
    _react2.default.createElement(
      MenuWrapper,
      { show: show, height: height, width: width, theme: theme },
      _react2.default.createElement(
        _reactFlexview2.default,
        { column: true, style: { width: width + 'px', height: height + 'px' } },
        _react2.default.createElement(
          _reactFlexview2.default,
          { width: '100%', style: { padding: '15px' }, hAlignContent: 'right' },
          _react2.default.createElement(_EscapeButton2.default, { handleClick: closeMobileNavMenu })
        ),
        _react2.default.createElement(
          _reactFlexview2.default,
          { column: true, width: '100%', hAlignContent: 'left', style: { paddingTop: '25px' } },
          linkItems.map(function (x, i) {
            return _react2.default.createElement(
              _reactFlexview2.default,
              { key: i, width: '100%', style: { cursor: 'pointer' }, onClick: x.handleClick },
              _react2.default.createElement(
                _Pad2.default,
                { vertical: { xs: 2 }, horizontal: { xs: 4 }, key: i },
                x.type === 'button' ? _react2.default.createElement(_Button2.default, {
                  text: x.text,
                  handleClick: x.handleClick,
                  raised: true,
                  whiteText: true,
                  color: 'red'
                }) : _react2.default.createElement(_Hyperlink2.default, {
                  text: x.text,
                  handleClick: x.handleClick,
                  color: 'grey',
                  hoverColor: 'blue',
                  hoverShade: '0'
                })
              )
            );
          })
        )
      )
    )
  );
}

MobileNavMenu.propTypes = propTypes;
MobileNavMenu.defaultProps = defaultProps;

exports.default = (0, _viewPort2.default)(MobileNavMenu);