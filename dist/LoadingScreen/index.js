'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = require('react-flexbox-grid');

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _ColorBlock = require('../ColorBlock');

var _ColorBlock2 = _interopRequireDefault(_ColorBlock);

var _InspireMessageHeading = require('../InspireMessageHeading');

var _InspireMessageHeading2 = _interopRequireDefault(_InspireMessageHeading);

var _LoadingChippie = require('../LoadingChippie');

var _LoadingChippie2 = _interopRequireDefault(_LoadingChippie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoadingScreen() {
  // const colors = ['blue', 'purple', 'ocean', 'green'];
  // const col = colors[Math.floor(Math.random() * colors.length)];

  return _react2.default.createElement(
    _ColorBlock2.default,
    { color: 'blue', shade: '0', width: '100%', height: '100%' },
    _react2.default.createElement(
      _reactFlexboxGrid.Grid,
      { style: { height: '100%' } },
      _react2.default.createElement(
        _reactFlexboxGrid.Row,
        { center: 'xs', middle: 'xs', style: { height: '100%' } },
        _react2.default.createElement(
          _reactFlexboxGrid.Col,
          { xs: 6 },
          _react2.default.createElement(
            _reactFlexview2.default,
            { hAlignContent: 'center', vAlignContent: 'center' },
            _react2.default.createElement(_LoadingChippie2.default, null)
          ),
          _react2.default.createElement(_InspireMessageHeading2.default, { size: '4', color: 'white', shade: '0' })
        )
      )
    )
  );
}
// import PropTypes from 'prop-types';


LoadingScreen.propTypes = {};

LoadingScreen.defaultProps = {};

exports.default = LoadingScreen;