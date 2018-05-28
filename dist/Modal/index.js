'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: fixed;\n  top: 15px;\n  right: 25px;\n  z-index: 102;\n  &:hover {\n    cursor: pointer;\n  }\n'], ['\n  position: fixed;\n  top: 15px;\n  right: 25px;\n  z-index: 102;\n  &:hover {\n    cursor: pointer;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 150px;\n  overflow-y: scroll;\n  position: relative;\n  z-index: 101;\n  height: ', 'px;\n'], ['\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 150px;\n  overflow-y: scroll;\n  position: relative;\n  z-index: 101;\n  height: ', 'px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _helpers = require('../helpers');

var _EscapeButton = require('../EscapeButton');

var _EscapeButton2 = _interopRequireDefault(_EscapeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n    background-color: ' + props.theme.colors.white['0'] + ';\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    width: ' + props.width + 'px;\n    height: ' + props.height + 'px;\n    z-index: 100;\n    box-sizing: border-box;\n  ';
});

var EscapeWrapper = _styledComponents2.default.div(_templateObject2);

var Container = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.height;
});

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.keydownEscape = _this.keydownEscape.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('keydown', this.keydownEscape, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.keydownEscape, false);
    }
  }, {
    key: 'keydownEscape',
    value: function keydownEscape(e) {
      // e.preventDefault();
      if (e.keyCode === 27) {
        this.props.closeModal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          width = _props.width,
          height = _props.height,
          children = _props.children,
          theme = _props.theme,
          closeModal = _props.closeModal;

      return _react2.default.createElement(
        Wrapper,
        {
          show: show,
          width: width,
          height: height,
          theme: theme
        },
        _react2.default.createElement(
          EscapeWrapper,
          null,
          _react2.default.createElement(_EscapeButton2.default, {
            handleClick: closeModal
          })
        ),
        _react2.default.createElement(
          Container,
          {
            height: height
          },
          children
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  theme: _propTypes2.default.shape(),
  children: _propTypes2.default.element.isRequired,
  show: _propTypes2.default.bool.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  closeModal: _propTypes2.default.func.isRequired
};

Modal.defaultProps = {
  theme: _kratedTheme2.default
};

exports.default = (0, _helpers.viewPort)(Modal);