'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n'], ['\n  position: absolute;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _OrbitChannel = require('../OrbitChannel');

var _OrbitChannel2 = _interopRequireDefault(_OrbitChannel);

var _BrandedBlockIcon = require('../BrandedBlockIcon');

var _BrandedBlockIcon2 = _interopRequireDefault(_BrandedBlockIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import PropTypes from 'prop-types';


var propTypes = {};
var defaultProps = {};

var ChannelWrapper = _styledComponents2.default.div(_templateObject);

function OrbitChippie() {
  return _react2.default.createElement(
    _reactFlexview2.default,
    {
      style: {
        height: '400px',
        width: '400px'
      },
      hAlignContent: 'center',
      vAlignContent: 'center'
    },
    _react2.default.createElement(_BrandedBlockIcon2.default, { size: 5 }),
    _react2.default.createElement(
      ChannelWrapper,
      null,
      _react2.default.createElement(_OrbitChannel2.default, { electronColor: 'red', orbitTime: 8, electronRadius: 10, atomRadius: 200 })
    ),
    _react2.default.createElement(
      ChannelWrapper,
      null,
      _react2.default.createElement(_OrbitChannel2.default, { electronColor: 'purple', orbitTime: 5, electronRadius: 12, atomRadius: 170 })
    ),
    _react2.default.createElement(
      ChannelWrapper,
      null,
      _react2.default.createElement(_OrbitChannel2.default, { electronColor: 'ocean', orbitTime: 6, electronRadius: 9, atomRadius: 140 })
    ),
    _react2.default.createElement(
      ChannelWrapper,
      null,
      _react2.default.createElement(_OrbitChannel2.default, { electronColor: 'yellow', orbitTime: 9, electronRadius: 11, atomRadius: 110 })
    ),
    _react2.default.createElement(
      ChannelWrapper,
      null,
      _react2.default.createElement(_OrbitChannel2.default, { electronColor: 'green', orbitTime: 7, electronRadius: 8, atomRadius: 80 })
    )
  );
}

OrbitChippie.propTypes = propTypes;
OrbitChippie.defaultProps = defaultProps;

exports.default = OrbitChippie;