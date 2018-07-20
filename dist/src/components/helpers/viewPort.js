'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = viewPort;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSizes = require('react-sizes');

var _reactSizes2 = _interopRequireDefault(_reactSizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function viewPort(WrappedComponent) {
  function ViewPort(props) {
    return _react2.default.createElement(WrappedComponent, props);
  }

  var mapSizesToProps = function mapSizesToProps(_ref) {
    var width = _ref.width,
        height = _ref.height;

    var device = 'phone';
    if (width >= 1200) {
      device = 'large_desktop';
    } else if (width >= 992) {
      device = 'desktop';
    } else if (width >= 768) {
      device = 'tablet';
    } else if (width >= 576) {
      device = 'landscape_phone';
    }

    var tabletAndUp = ['tablet', 'desktop', 'large_desktop'].includes(device);
    var desktopAndUp = ['desktop', 'large_desktop'].includes(device);
    var phone = ['landscape_phone', 'phone'].includes(device);

    return {
      width: width,
      height: height,
      device: device,
      tabletAndUp: tabletAndUp,
      desktopAndUp: desktopAndUp,
      phone: phone
    };
  };

  ViewPort.propTypes = {
    device: _propTypes2.default.oneOf(['phone', 'large_desktop', 'desktop', 'tablet', 'landscape_phone']).isRequired,
    width: _propTypes2.default.number.isRequired,
    height: _propTypes2.default.number.isRequired,
    tabletAndUp: _propTypes2.default.bool.isRequired,
    desktopAndUp: _propTypes2.default.bool.isRequired,
    phone: _propTypes2.default.bool.isRequired
  };

  return (0, _reactSizes2.default)(mapSizesToProps)(ViewPort);
}

//# sourceMappingURL=viewPort.js.map