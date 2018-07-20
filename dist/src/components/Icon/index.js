'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _fontawesome = require('./fontawesome');

var _fontawesome2 = _interopRequireDefault(_fontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { shevyConfig } from '../helpers';

// const shevy = new Shevy(shevyConfig);
// const {
//   content,
// } = shevy;

function Icon(_ref) {
  var theme = _ref.theme,
      icon = _ref.icon,
      color = _ref.color,
      shade = _ref.shade,
      size = _ref.size;

  return _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _fontawesome2.default[icon], color: theme.colors[color][shade], size: size });
}
// import styled from 'styled-components';
// import Shevy from 'shevyjs';


Icon.propTypes = {
  theme: _propTypes2.default.shape(),
  icon: _propTypes2.default.oneOf(['faPlus', 'faTimes', 'faFacebookSquare', 'faTwitter', 'faCheckCircle']).isRequired,
  color: _propTypes2.default.string,
  shade: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'])
};

Icon.defaultProps = {
  theme: _kratedTheme2.default,
  color: 'grey',
  shade: '0',
  size: 'sm'
};

exports.default = Icon;

//# sourceMappingURL=index.js.map