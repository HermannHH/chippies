'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = viewPort;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSizes = require('react-sizes');

var _reactSizes2 = _interopRequireDefault(_reactSizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function viewPort(WrappedComponent) {
  var ViewPort = function (_PureComponent) {
    _inherits(ViewPort, _PureComponent);

    function ViewPort(props) {
      _classCallCheck(this, ViewPort);

      var _this = _possibleConstructorReturn(this, (ViewPort.__proto__ || Object.getPrototypeOf(ViewPort)).call(this, props));

      _this.state = {
        distanceToTop: 0
      };
      return _this;
    }

    _createClass(ViewPort, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        window.addEventListener('scroll', function () {
          var root = document.getElementById('root');
          var distanceToTop = root.getBoundingClientRect().top;
          _this2.setState({ distanceToTop: distanceToTop });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, Object.assign({}, this.props, { distanceToTop: this.state.distanceToTop }));
      }
    }]);

    return ViewPort;
  }(_react.PureComponent);

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

//# sourceMappingURL=index.js.map