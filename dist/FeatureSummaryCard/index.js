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

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _CardActions = require('../CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  mainText: _propTypes2.default.string.isRequired,
  subText: _propTypes2.default.string.isRequired,
  imgSrc: _propTypes2.default.string.isRequired,
  handleClick: _propTypes2.default.func.isRequired
};
var defaultProps = {};

function FeatureSummaryCard(_ref) {
  var imgSrc = _ref.imgSrc,
      mainText = _ref.mainText,
      subText = _ref.subText,
      handleClick = _ref.handleClick;

  return _react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(
      _Pad2.default,
      { top: { xs: 4 }, left: { xs: 4 } },
      _react2.default.createElement(_ProgressiveImage2.default, { width: '70px', height: '70px', src: imgSrc, size: 'contain' })
    ),
    _react2.default.createElement(
      _CardPad2.default,
      null,
      _react2.default.createElement(_HeadingGroup2.default, { size: '5', mainText: mainText, subText: subText, withMargin: false })
    ),
    _react2.default.createElement(_CardActions2.default, { comps: [_react2.default.createElement(_Button2.default, { text: 'See more', handleClick: handleClick })], layout: 'right' })
  );
}

FeatureSummaryCard.propTypes = propTypes;
FeatureSummaryCard.defaultProps = defaultProps;

exports.default = FeatureSummaryCard;