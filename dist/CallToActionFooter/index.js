'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _viewPort = require('../viewPort');

var _viewPort2 = _interopRequireDefault(_viewPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  theme: _propTypes2.default.shape({}),
  backgroundColor: _propTypes2.default.string,
  backgroundShade: _propTypes2.default.string,
  buttonColor: _propTypes2.default.string,
  buttonShade: _propTypes2.default.string,
  desktopAndUp: _propTypes2.default.bool.isRequired,
  handleClick: _propTypes2.default.func.isRequired,
  text: _propTypes2.default.string.isRequired,
  buttonText: _propTypes2.default.string.isRequired
};
var defaultProps = {
  theme: _kratedTheme2.default,
  backgroundColor: 'grey',
  backgroundShade: '-2'
};

function CallToActionFooter(_ref) {
  var desktopAndUp = _ref.desktopAndUp,
      theme = _ref.theme,
      backgroundColor = _ref.backgroundColor,
      backgroundShade = _ref.backgroundShade,
      handleClick = _ref.handleClick,
      text = _ref.text,
      buttonText = _ref.buttonText,
      buttonColor = _ref.buttonColor,
      buttonShade = _ref.buttonShade;

  return _react2.default.createElement(
    _reactFlexview2.default,
    {
      hAlignContent: 'center',
      vAlignContent: 'center',
      column: true,
      style: {
        padding: '' + (desktopAndUp ? '10%' : '15% 5%'),
        backgroundColor: '' + theme.colors[backgroundColor][backgroundShade]
      }
    },
    _react2.default.createElement(
      _reactFlexview2.default,
      { marginTop: '30px', style: { textAlign: 'center' } },
      _react2.default.createElement(_Heading2.default, { text: text, withMargin: false, size: '3' })
    ),
    _react2.default.createElement(
      _reactFlexview2.default,
      { marginTop: '30px' },
      _react2.default.createElement(_Button2.default, {
        text: buttonText,
        handleClick: handleClick,
        raised: true,
        whiteText: true,
        color: buttonColor,
        shade: buttonShade
      })
    )
  );
}

CallToActionFooter.propTypes = propTypes;
CallToActionFooter.defaultProps = defaultProps;

exports.default = (0, _viewPort2.default)(CallToActionFooter);