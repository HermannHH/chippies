'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = require('react-flexbox-grid');

var _ColorBlock = require('../ColorBlock');

var _ColorBlock2 = _interopRequireDefault(_ColorBlock);

var _InspireMessageHeading = require('../InspireMessageHeading');

var _InspireMessageHeading2 = _interopRequireDefault(_InspireMessageHeading);

var _PulsingBrandedWhiteIcon = require('../PulsingBrandedWhiteIcon');

var _PulsingBrandedWhiteIcon2 = _interopRequireDefault(_PulsingBrandedWhiteIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PropTypes from 'prop-types';
function LoadingScreen() {

  var colors = ['blue', 'purple', 'ocean', 'green'];
  var col = colors[Math.floor(Math.random() * colors.length)];

  return _react2.default.createElement(
    _ColorBlock2.default,
    { color: col, shade: '0', width: '100%', height: '100%' },
    _react2.default.createElement(
      _reactFlexboxGrid.Grid,
      { style: { height: '100%' } },
      _react2.default.createElement(
        _reactFlexboxGrid.Row,
        { center: 'xs', middle: 'xs', style: { height: '100%' } },
        _react2.default.createElement(
          _reactFlexboxGrid.Col,
          { xs: 6 },
          _react2.default.createElement(_PulsingBrandedWhiteIcon2.default, null),
          _react2.default.createElement(_InspireMessageHeading2.default, {
            size: '4',
            color: 'white',
            shade: '0'
          })
        )
      )
    )
  );
}

LoadingScreen.propTypes = {};

LoadingScreen.defaultProps = {};

exports.default = LoadingScreen;