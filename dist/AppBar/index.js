'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  ', ';\n'], ['\n  width: 100%;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  padding-top: 5px;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: pointer;\n'], ['\n  display: inline-block;\n  padding-top: 5px;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: pointer;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  justify-content: flex-end;\n  ', ';\n'], ['\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  justify-content: flex-end;\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _ColorBlock = require('../ColorBlock');

var _ColorBlock2 = _interopRequireDefault(_ColorBlock);

var _BrandedMixedLogo = require('../BrandedMixedLogo');

var _BrandedMixedLogo2 = _interopRequireDefault(_BrandedMixedLogo);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _viewPort = require('../viewPort');

var _viewPort2 = _interopRequireDefault(_viewPort);

var _MobileNavMenu = require('../MobileNavMenu');

var _MobileNavMenu2 = _interopRequireDefault(_MobileNavMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InnerWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n    box-shadow: ' + (props.shadowDropIn && props.theme.box.shadow.shallow) + ';\n    height: ' + props.theme.appBar.megaHeight + 'px;\n  ';
});

var LogoWrapper = _styledComponents2.default.div(_templateObject2);

var LinksWrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return '\n    height: ' + props.theme.appBar.megaHeight + 'px;\n  ';
});

function AppBar(_ref) {
  var theme = _ref.theme,
      type = _ref.type,
      shadowDropIn = _ref.shadowDropIn,
      navItemElements = _ref.navItemElements,
      handleLogoClick = _ref.handleLogoClick,
      desktopAndUp = _ref.desktopAndUp,
      navItemShape = _ref.navItemShape,
      mobileNavOpen = _ref.mobileNavOpen,
      handleMobileNavOpen = _ref.handleMobileNavOpen,
      handleMobileNavClose = _ref.handleMobileNavClose;

  var navContent = void 0;
  if (desktopAndUp) {
    navContent = navItemElements.map(function (x, i) {
      return _react2.default.createElement(
        _Pad2.default,
        { horizontal: { xs: 3 }, key: i },
        x
      );
    });
  } else {
    navContent = _react2.default.createElement(
      _Pad2.default,
      { horizontal: { xs: 4 } },
      _react2.default.createElement(_MobileNavMenu2.default, {
        openMobileNavMenu: handleMobileNavOpen,
        closeMobileNavMenu: handleMobileNavClose,
        show: mobileNavOpen,
        linkItems: navItemShape
      })
    );
  }
  return _react2.default.createElement(
    _ColorBlock2.default,
    { width: '100%', height: theme.appBar.megaHeight + 'px', color: type, shade: '0' },
    _react2.default.createElement(
      InnerWrapper,
      { shadowDropIn: shadowDropIn, theme: theme },
      _react2.default.createElement(
        LogoWrapper,
        { onClick: handleLogoClick },
        _react2.default.createElement(
          _Pad2.default,
          { horizontal: { xs: 3 } },
          _react2.default.createElement(_BrandedMixedLogo2.default, null)
        )
      ),
      _react2.default.createElement(
        LinksWrapper,
        { theme: theme },
        navContent
      )
    )
  );
}

AppBar.propTypes = {
  theme: _propTypes2.default.shape(),
  type: _propTypes2.default.oneOf(['blue', 'white']),
  shadowDropIn: _propTypes2.default.bool,
  navItemElements: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  navItemShape: _propTypes2.default.arrayOf(_propTypes2.default.shape({})).isRequired,
  handleLogoClick: _propTypes2.default.func.isRequired,
  desktopAndUp: _propTypes2.default.bool.isRequired,
  mobileNavOpen: _propTypes2.default.bool,
  handleMobileNavOpen: _propTypes2.default.func.isRequired,
  handleMobileNavClose: _propTypes2.default.func.isRequired
};
AppBar.defaultProps = {
  theme: _kratedTheme2.default,
  type: 'white',
  shadowDropIn: false,
  mobileNavOpen: false
};

exports.default = (0, _viewPort2.default)(AppBar);