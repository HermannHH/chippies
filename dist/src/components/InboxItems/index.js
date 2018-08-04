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

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Hyperlink = require('../Hyperlink');

var _Hyperlink2 = _interopRequireDefault(_Hyperlink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  messages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired
  })).isRequired,
  handleClick: _propTypes2.default.func.isRequired
};
var defaultProps = {};

function InboxItems(_ref) {
  var messages = _ref.messages,
      handleClick = _ref.handleClick;

  return _react2.default.createElement(
    'div',
    null,
    messages.map(function (x) {
      return _react2.default.createElement(
        _reactFlexview2.default,
        { key: x.id, marginBottom: '15px' },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _CardPad2.default,
            null,
            _react2.default.createElement(
              _Paragraph2.default,
              { withMargin: false },
              x.text
            ),
            _react2.default.createElement(
              _reactFlexview2.default,
              { hAlignContent: 'right' },
              _react2.default.createElement(_Hyperlink2.default, { text: 'See more...', handleClick: handleClick })
            )
          )
        )
      );
    })
  );
}

InboxItems.propTypes = propTypes;
InboxItems.defaultProps = defaultProps;

exports.default = InboxItems;

//# sourceMappingURL=index.js.map