'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  justify-content: flex-end;\n'], ['\n  width: 100%;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  justify-content: flex-end;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  text-align: center;\n  padding: 0px ', ';\n  &:last-child {\n    padding-right: 0px;\n  }\n'], ['\n  display: inline-block;\n  text-align: center;\n  padding: 0px ', ';\n  &:last-child {\n    padding-right: 0px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  text-align: center;\n  display: inline-block;\n  padding: 0px ', ';\n  &:last-child {\n    padding-right: 0px;\n  }\n'], ['\n  text-align: center;\n  display: inline-block;\n  padding: 0px ', ';\n  &:last-child {\n    padding-right: 0px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = require('react-flexbox-grid');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _helpers = require('../helpers');

var _ColorBlock = require('../ColorBlock');

var _ColorBlock2 = _interopRequireDefault(_ColorBlock);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _BrandedWhiteIcon = require('../BrandedWhiteIcon');

var _BrandedWhiteIcon2 = _interopRequireDefault(_BrandedWhiteIcon);

var _Hyperlink = require('../Hyperlink');

var _Hyperlink2 = _interopRequireDefault(_Hyperlink);

var _Small = require('../Small');

var _Small2 = _interopRequireDefault(_Small);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_helpers.shevyConfig);
var bs = shevy.baseSpacing;


var LinksWrapper = _styledComponents2.default.div(_templateObject);

var LinkItemWrapper = _styledComponents2.default.div(_templateObject2, bs(0.5));

var SocialLinkItemWrapper = _styledComponents2.default.div(_templateObject3, bs(0.2));

function BrochureFooter() {
  return _react2.default.createElement(
    _ColorBlock2.default,
    {
      width: '100%',
      color: 'blue',
      shade: '0',
      height: 'auto'
    },
    _react2.default.createElement(
      _Pad2.default,
      {
        horizontal: { xs: 5 },
        vertical: { xs: 4 }
      },
      _react2.default.createElement(
        _reactFlexboxGrid.Grid,
        { fluid: true },
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          { middle: 'xs' },
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, md: 3 },
            _react2.default.createElement(
              _Pad2.default,
              {
                top: { xs: 2 },
                bottom: { xs: 3 }
              },
              _react2.default.createElement(_BrandedWhiteIcon2.default, { size: '6' })
            )
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, md: 9 },
            _react2.default.createElement(
              _Pad2.default,
              {
                vertical: { xs: 2 }
              },
              _react2.default.createElement(
                LinksWrapper,
                null,
                _react2.default.createElement(
                  LinkItemWrapper,
                  null,
                  _react2.default.createElement(_Hyperlink2.default, {
                    text: 'Product',
                    handleClick: function handleClick() {
                      return alert('Hello Hyperlink');
                    },
                    color: 'white',
                    hoverColor: 'grey',
                    hoverShade: '0'
                  })
                ),
                _react2.default.createElement(
                  LinkItemWrapper,
                  null,
                  _react2.default.createElement(_Hyperlink2.default, {
                    text: 'Our Purpose',
                    handleClick: function handleClick() {
                      return alert('Hello Hyperlink');
                    },
                    color: 'white'
                  })
                ),
                _react2.default.createElement(
                  LinkItemWrapper,
                  null,
                  _react2.default.createElement(_Hyperlink2.default, {
                    text: 'Pricing',
                    handleClick: function handleClick() {
                      return alert('Hello Hyperlink');
                    },
                    color: 'white'
                  })
                ),
                _react2.default.createElement(
                  LinkItemWrapper,
                  null,
                  _react2.default.createElement(_Hyperlink2.default, {
                    text: 'Blog',
                    handleClick: function handleClick() {
                      return alert('Hello Hyperlink');
                    },
                    color: 'white'
                  })
                )
              )
            )
          )
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          { middle: 'xs' },
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, md: 3 },
            _react2.default.createElement(
              _Pad2.default,
              {
                top: { xs: 2 },
                bottom: { xs: 1 }
              },
              _react2.default.createElement(
                _Small2.default,
                { color: 'white', shade: '0' },
                '\xA9 ' + new Date().getFullYear() + ' Krated (PTY) Ltd.'
              )
            )
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, md: 9 },
            _react2.default.createElement(
              _Pad2.default,
              {
                top: { xs: 1 },
                bottom: { xs: 2 }
              },
              _react2.default.createElement(
                LinksWrapper,
                null,
                _react2.default.createElement(
                  SocialLinkItemWrapper,
                  null,
                  _react2.default.createElement(_Hyperlink2.default, {
                    icon: 'faFacebookSquare',
                    handleClick: function handleClick() {
                      return alert('Hello Hyperlink');
                    },
                    color: 'white'
                  })
                ),
                _react2.default.createElement(
                  SocialLinkItemWrapper,
                  null,
                  _react2.default.createElement(_Hyperlink2.default, {
                    icon: 'faTwitter',
                    handleClick: function handleClick() {
                      return alert('Hello Hyperlink');
                    },
                    color: 'white'
                  })
                )
              )
            )
          )
        )
      )
    )
  );
}

exports.default = BrochureFooter;