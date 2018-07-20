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

var _CardCover = require('../CardCover');

var _CardCover2 = _interopRequireDefault(_CardCover);

var _CardTitle = require('../CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardActions = require('../CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _Hyperlink = require('../Hyperlink');

var _Hyperlink2 = _interopRequireDefault(_Hyperlink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductCard(_ref) {
  var text = _ref.text,
      src = _ref.src,
      handleClick = _ref.handleClick;

  return _react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(_CardCover2.default, {
      src: src
    }),
    _react2.default.createElement(_CardTitle2.default, {
      text: text
    }),
    _react2.default.createElement(_CardActions2.default, {
      comps: [_react2.default.createElement(_Hyperlink2.default, { text: 'Add to quote', handleClick: handleClick, icon: 'faPlus' })],
      layout: 'right'
    })
  );
}

ProductCard.propTypes = {
  text: _propTypes2.default.string.isRequired,
  src: _propTypes2.default.string.isRequired,
  handleClick: _propTypes2.default.func.isRequired
};

exports.default = ProductCard;

//# sourceMappingURL=index.js.map