'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardPad = require('../CardPad');

var _CardPad2 = _interopRequireDefault(_CardPad);

var _HeadingGroup = require('../HeadingGroup');

var _HeadingGroup2 = _interopRequireDefault(_HeadingGroup);

var _ProgressiveImage = require('../ProgressiveImage');

var _ProgressiveImage2 = _interopRequireDefault(_ProgressiveImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  mainText: _propTypes2.default.string.isRequired,
  subText: _propTypes2.default.string.isRequired,
  imgSrc: _propTypes2.default.string.isRequired
};
var defaultProps = {};

function FeatureSummaryCard(_ref) {
  var imgSrc = _ref.imgSrc,
      mainText = _ref.mainText,
      subText = _ref.subText;

  return _react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(
      _CardPad2.default,
      null,
      _react2.default.createElement(_ProgressiveImage2.default, { width: '80px', height: '80px', src: imgSrc })
    ),
    _react2.default.createElement(
      _CardPad2.default,
      null,
      _react2.default.createElement(_HeadingGroup2.default, { size: '5', mainText: mainText, subText: subText, withMargin: false })
    )
  );
}

FeatureSummaryCard.propTypes = propTypes;
FeatureSummaryCard.defaultProps = defaultProps;

exports.default = FeatureSummaryCard;