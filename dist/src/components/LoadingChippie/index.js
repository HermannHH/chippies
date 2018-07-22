'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n'], ['\n  position: absolute;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _OrbitChannel = require('../OrbitChannel');

var _OrbitChannel2 = _interopRequireDefault(_OrbitChannel);

var _BrandedWhiteIcon = require('../BrandedWhiteIcon');

var _BrandedWhiteIcon2 = _interopRequireDefault(_BrandedWhiteIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {};
var defaultProps = {};

var ChannelWrapper = _styledComponents2.default.div(_templateObject);

function LoadingChippie() {
  return _react2.default.createElement(
    _reactFlexview2.default,
    {
      style: {
        height: '160px',
        width: '160px'
      },
      hAlignContent: 'center',
      vAlignContent: 'center'
    },
    _react2.default.createElement(_BrandedWhiteIcon2.default, { size: 5 }),
    _react2.default.createElement(
      ChannelWrapper,
      null,
      _react2.default.createElement(_OrbitChannel2.default, { electronColor: 'red', orbitTime: 6, electronRadius: 10, atomRadius: 80 })
    )
  );
}

LoadingChippie.propTypes = propTypes;
LoadingChippie.defaultProps = defaultProps;

exports.default = LoadingChippie;

//# sourceMappingURL=index.js.map