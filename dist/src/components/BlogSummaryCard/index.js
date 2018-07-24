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

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardPad = require('../CardPad');

var _CardPad2 = _interopRequireDefault(_CardPad);

var _ProgressiveImage = require('../ProgressiveImage');

var _ProgressiveImage2 = _interopRequireDefault(_ProgressiveImage);

var _HeadingGroup = require('../HeadingGroup');

var _HeadingGroup2 = _interopRequireDefault(_HeadingGroup);

var _CardActions = require('../CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  imgSrc: _propTypes2.default.string.isRequired,
  heading: _propTypes2.default.string.isRequired,
  contentSummary: _propTypes2.default.string.isRequired,
  handleClick: _propTypes2.default.func.isRequired
};
var defaultProps = {};

function BlogSummaryCard(_ref) {
  var imgSrc = _ref.imgSrc,
      heading = _ref.heading,
      contentSummary = _ref.contentSummary,
      handleClick = _ref.handleClick;

  return _react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(
      _reactFlexview2.default,
      null,
      _react2.default.createElement(
        _reactFlexview2.default,
        { basis: '200px' },
        _react2.default.createElement(_ProgressiveImage2.default, { src: imgSrc })
      ),
      _react2.default.createElement(
        _reactFlexview2.default,
        { width: '100%', style: {}, wrap: true },
        _react2.default.createElement(
          _reactFlexview2.default,
          { width: '100%', style: {} },
          _react2.default.createElement(
            _CardPad2.default,
            null,
            _react2.default.createElement(_HeadingGroup2.default, {
              size: '4',
              withMargin: false,
              mainText: heading,
              subText: contentSummary
            })
          )
        ),
        _react2.default.createElement(_CardActions2.default, {
          comps: [_react2.default.createElement(_Button2.default, { text: 'Read more', handleClick: handleClick })],
          layout: 'right'
        })
      )
    )
  );
}

BlogSummaryCard.propTypes = propTypes;
BlogSummaryCard.defaultProps = defaultProps;

exports.default = BlogSummaryCard;

//# sourceMappingURL=index.js.map