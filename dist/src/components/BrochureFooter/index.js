'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  text-align: center;\n  padding: 0px ', ';\n  &:last-child {\n    padding-right: 0px;\n  }\n'], ['\n  display: inline-block;\n  text-align: center;\n  padding: 0px ', ';\n  &:last-child {\n    padding-right: 0px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  text-align: center;\n  display: inline-block;\n  padding: 0px ', ';\n  &:last-child {\n    padding-right: 0px;\n  }\n'], ['\n  text-align: center;\n  display: inline-block;\n  padding: 0px ', ';\n  &:last-child {\n    padding-right: 0px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFlexboxGrid = require('react-flexbox-grid');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _helpers = require('../helpers');

var _BrandedWhiteIcon = require('../BrandedWhiteIcon');

var _BrandedWhiteIcon2 = _interopRequireDefault(_BrandedWhiteIcon);

var _Hyperlink = require('../Hyperlink');

var _Hyperlink2 = _interopRequireDefault(_Hyperlink);

var _Small = require('../Small');

var _Small2 = _interopRequireDefault(_Small);

var _viewPort = require('../viewPort');

var _viewPort2 = _interopRequireDefault(_viewPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_helpers.shevyConfig);
var bs = shevy.baseSpacing;


var propTypes = {
  linkItems: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  facebookLink: _propTypes2.default.string.isRequired,
  twitterLink: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.shape({}),
  desktopAndUp: _propTypes2.default.bool.isRequired
};

var defaultProps = {
  theme: _kratedTheme2.default
};

var LinkItemWrapper = _styledComponents2.default.div(_templateObject, bs(0.5));

var SocialLinkItemWrapper = _styledComponents2.default.div(_templateObject2, bs(0.2));

function BrochureFooter(_ref) {
  var theme = _ref.theme,
      linkItems = _ref.linkItems,
      facebookLink = _ref.facebookLink,
      twitterLink = _ref.twitterLink,
      desktopAndUp = _ref.desktopAndUp;

  return _react2.default.createElement(
    _reactFlexview2.default,
    {
      column: true,
      width: '100%',
      style: { padding: '5%', backgroundColor: theme.colors.blue['0'] }
    },
    _react2.default.createElement(
      _reactFlexview2.default,
      {
        row: true,
        column: !desktopAndUp,
        width: '100%',
        vAlignContent: 'center',
        style: {
          borderBottom: 'thin solid',
          borderColor: theme.colors.white['0'],
          paddingBottom: '15px'
        }
      },
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          hAlignContent: 'center',
          vAlignContent: 'center',
          style: !desktopAndUp && { padding: '3%' }
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_BrandedWhiteIcon2.default, { size: '6' })
        )
      ),
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          width: '100%',
          vAlignContent: 'center',
          hAlignContent: !desktopAndUp ? 'center' : 'right',
          style: { padding: '15px' }
        },
        linkItems.map(function (x, i) {
          return _react2.default.createElement(
            LinkItemWrapper,
            { key: i },
            x
          );
        })
      )
    ),
    _react2.default.createElement(
      _reactFlexview2.default,
      {
        wrap: !desktopAndUp,
        width: '100%',
        vAlignContent: 'center',
        style: { padding: '15px' }
      },
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          width: !desktopAndUp ? '100%' : '280px',
          style: {},
          hAlignContent: !desktopAndUp && 'center'
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Small2.default,
            { color: 'white', shade: '0' },
            '\xA9 ' + new Date().getFullYear() + ' Krated (PTY) Ltd.'
          )
        )
      ),
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          width: '100%',
          hAlignContent: !desktopAndUp ? 'center' : 'right',
          style: !desktopAndUp && { padding: '3%' }
        },
        _react2.default.createElement(
          SocialLinkItemWrapper,
          null,
          _react2.default.createElement(_Hyperlink2.default, {
            icon: 'faFacebookSquare',
            handleClick: function handleClick() {
              return window.open(facebookLink, '_blank');
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
              return window.open(twitterLink, '_blank');
            },
            color: 'white'
          })
        )
      )
    )
  );
}

BrochureFooter.propTypes = propTypes;
BrochureFooter.defaultProps = defaultProps;

exports.default = (0, _viewPort2.default)(BrochureFooter);

//# sourceMappingURL=index.js.map