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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  rounded: _propTypes2.default.bool,
  src: _propTypes2.default.string.isRequired,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['cover', 'contain'])
};
var defaultProps = {
  rounded: false,
  height: '100%',
  width: '100%',
  size: 'cover'
};

/**
 * Progressive image uses css background to cover or contain given div with src image
 */

function ProgressiveImage(_ref) {
  var height = _ref.height,
      width = _ref.width,
      rounded = _ref.rounded,
      size = _ref.size,
      src = _ref.src;

  return _react2.default.createElement(_reactFlexview2.default, {
    style: {
      height: '' + height,
      width: '' + width,
      borderRadius: '' + (rounded && '50%'),
      backgroundColor: 'inherit',
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(' + src + ')'
    }
  });
}

ProgressiveImage.propTypes = propTypes;

ProgressiveImage.defaultProps = defaultProps;

exports.default = ProgressiveImage;

//# sourceMappingURL=index.js.map