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

var _ProgressiveImage = require('../ProgressiveImage');

var _ProgressiveImage2 = _interopRequireDefault(_ProgressiveImage);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  text: _propTypes2.default.string.isRequired,
  imgSrc: _propTypes2.default.string,
  handleClick: _propTypes2.default.func,
  buttonText: _propTypes2.default.string
};
var defaultProps = {
  imgSrc: null,
  handleClick: null,
  buttonText: null
};

function NoResults(_ref) {
  var text = _ref.text,
      imgSrc = _ref.imgSrc,
      handleClick = _ref.handleClick,
      buttonText = _ref.buttonText;

  return _react2.default.createElement(
    _reactFlexview2.default,
    { vAlignContent: 'center', hAlignContent: 'center', column: true },
    imgSrc && _react2.default.createElement(
      _reactFlexview2.default,
      { marginBottom: '25px', height: '200px', width: '200px' },
      _react2.default.createElement(_ProgressiveImage2.default, { src: imgSrc })
    ),
    _react2.default.createElement(
      _reactFlexview2.default,
      { style: { padding: "0px 30px", textAlign: "center" }, width: '100%' },
      _react2.default.createElement(_Heading2.default, { text: text, size: '4' })
    ),
    handleClick && buttonText && _react2.default.createElement(
      _reactFlexview2.default,
      null,
      _react2.default.createElement(_Button2.default, { text: buttonText, handleClick: handleClick })
    )
  );
}

NoResults.propTypes = propTypes;
NoResults.defaultProps = defaultProps;

exports.default = NoResults;

//# sourceMappingURL=index.js.map