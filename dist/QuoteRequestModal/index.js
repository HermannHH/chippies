'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _InteractiveLineItem = require('../InteractiveLineItem');

var _InteractiveLineItem2 = _interopRequireDefault(_InteractiveLineItem);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _HeadingGroup = require('../HeadingGroup');

var _HeadingGroup2 = _interopRequireDefault(_HeadingGroup);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QuoteRequestModal(_ref) {
  var closeModal = _ref.closeModal,
      items = _ref.items,
      handleQtyClickChange = _ref.handleQtyClickChange,
      handleQtyTypingChange = _ref.handleQtyTypingChange;

  return _react2.default.createElement(
    _Modal2.default,
    {
      closeModal: closeModal
    },
    _react2.default.createElement(_HeadingGroup2.default, { mainText: 'Quotation items', subText: 'Confirm the quotation item details below to provide us with the information required to generate an accurate quotation' }),
    Object.keys(items).map(function (x) {
      return _react2.default.createElement(
        _Pad2.default,
        {
          key: x,
          vertical: { xs: 3 }
        },
        _react2.default.createElement(_InteractiveLineItem2.default, {
          id: x,
          title: items[x].text,
          imgSrc: items[x].src,
          handleTypingChange: handleQtyTypingChange,
          handleClickChange: handleQtyClickChange,
          value: items[x].qty
        })
      );
    }),
    _react2.default.createElement(
      _Pad2.default,
      {
        vertical: { xs: 3 },
        top: { xs: 5 }
      },
      _react2.default.createElement(_Divider2.default, null)
    ),
    _react2.default.createElement(_HeadingGroup2.default, { mainText: 'Your company details', subText: 'Your company & personal information is required by the seller to generate a professional quotation that can be personalised for you' })
  );
}

QuoteRequestModal.propTypes = {
  closeModal: _propTypes2.default.func.isRequired,
  handleQtyClickChange: _propTypes2.default.func.isRequired,
  handleQtyTypingChange: _propTypes2.default.func.isRequired
};

QuoteRequestModal.defaultProps = {};

exports.default = QuoteRequestModal;