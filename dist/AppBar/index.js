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
      navItems = _ref.navItems,
      handleLogoClick = _ref.handleLogoClick;

  return _react2.default.createElement(
    _ColorBlock2.default,
    {
      width: '100%',
      height: theme.appBar.megaHeight + 'px',
      color: type,
      shade: '0'
    },
    _react2.default.createElement(
      InnerWrapper,
      {
        shadowDropIn: shadowDropIn,
        theme: theme
      },
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
        {
          theme: theme
        },
        navItems.map(function (x, i) {
          return _react2.default.createElement(
            _Pad2.default,
            { horizontal: { xs: 3 }, key: i },
            x
          );
        })
      )
    )
  );
}

AppBar.propTypes = {
  theme: _propTypes2.default.shape(),
  type: _propTypes2.default.oneOf(['blue', 'white']),
  shadowDropIn: _propTypes2.default.bool,
  navItems: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  handleLogoClick: _propTypes2.default.func.isRequired
};
AppBar.defaultProps = {
  theme: _kratedTheme2.default,
  type: 'white',
  shadowDropIn: false
};

exports.default = AppBar;