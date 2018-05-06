'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BrandHeader = require('../BrandHeader');

var _BrandHeader2 = _interopRequireDefault(_BrandHeader);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Mrg = require('../Mrg');

var _Mrg2 = _interopRequireDefault(_Mrg);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _FlexPosition = require('../FlexPosition');

var _FlexPosition2 = _interopRequireDefault(_FlexPosition);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _HeadingGroup = require('../HeadingGroup');

var _HeadingGroup2 = _interopRequireDefault(_HeadingGroup);

var _LineItems = require('../LineItems');

var _LineItems2 = _interopRequireDefault(_LineItems);

var _TextSection = require('../TextSection');

var _TextSection2 = _interopRequireDefault(_TextSection);

var _Toggle = require('../Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _TextArea = require('../TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Well = require('../Well');

var _Well2 = _interopRequireDefault(_Well);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AcceptQuote(_ref) {
  var lineItemData = _ref.lineItemData,
      referenceNumber = _ref.referenceNumber,
      handleCommentToggle = _ref.handleCommentToggle,
      commentToggled = _ref.commentToggled,
      seller = _ref.seller,
      termsChecked = _ref.termsChecked,
      handleTermsChecked = _ref.handleTermsChecked,
      handleAccept = _ref.handleAccept,
      handleReject = _ref.handleReject,
      handleCommentChange = _ref.handleCommentChange,
      commentValue = _ref.commentValue;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_BrandHeader2.default, { size: '2' }),
    _react2.default.createElement(
      _Pad2.default,
      { horizontal: { xs: 3, md: 5 } },
      _react2.default.createElement(_HeadingGroup2.default, { mainText: 'Accept quotation', subText: 'Below is a summary of quotation #' + referenceNumber }),
      _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(_LineItems2.default, { data: lineItemData })
      ),
      _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(
          _Well2.default,
          null,
          _react2.default.createElement(
            _TextSection2.default,
            {
              heading: 'Krated\'s Disclaimer',
              size: '6'
            },
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          )
        )
      ),
      _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(_Toggle2.default, {
          id: 'toggle',
          handleChange: handleCommentToggle,
          checked: commentToggled,
          label: commentToggled ? 'Remove comment' : 'Leave ' + seller + ' a comment'
        })
      ),
      commentToggled && _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(_TextArea2.default, {
          placeholder: 'Provide ' + seller + ' with any additional details that will make it easier for them to provide the best quotation experience possible',
          label: 'Additional comments',
          handleChange: handleCommentChange,
          value: commentValue
        })
      ),
      _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(_Divider2.default, null)
      ),
      _react2.default.createElement(
        _Mrg2.default,
        { all: { xs: 5 } },
        _react2.default.createElement(_FlexPosition2.default, {
          comps: [_react2.default.createElement(_Checkbox2.default, { isChecked: termsChecked, handleChange: handleTermsChecked, label: 'I agree to the terms of this quotation' })],
          layout: 'right'
        })
      ),
      _react2.default.createElement(_Mrg2.default, { vertical: { xs: 5 } }),
      _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(_FlexPosition2.default, {
          comps: [_react2.default.createElement(_Button2.default, { text: 'I want to reject this quotation', handleClick: handleReject, upcase: false }), _react2.default.createElement(_Button2.default, { text: 'Accept', raised: true, whiteText: true, disabled: !termsChecked, handleClick: handleAccept, color: 'red' })],
          layout: 'spread'
        })
      )
    )
  );
}

AcceptQuote.propTypes = {
  referenceNumber: _propTypes2.default.string.isRequired,
  lineItemData: _propTypes2.default.shape({
    grandTotal: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.string.isRequired,
      name: _propTypes2.default.string.isRequired,
      sku: _propTypes2.default.string.isRequired,
      qty: _propTypes2.default.number.isRequired,
      itemPrice: _propTypes2.default.string.isRequired,
      subTotal: _propTypes2.default.string.isRequired
    })).isRequired
  }).isRequired,
  handleCommentToggle: _propTypes2.default.func.isRequired,
  commentToggled: _propTypes2.default.bool.isRequired,
  seller: _propTypes2.default.string.isRequired,
  termsChecked: _propTypes2.default.bool.isRequired,
  handleTermsChecked: _propTypes2.default.func.isRequired,
  handleAccept: _propTypes2.default.func.isRequired,
  handleReject: _propTypes2.default.func.isRequired,
  handleCommentChange: _propTypes2.default.func.isRequired,
  commentValue: _propTypes2.default.string.isRequired
};

AcceptQuote.defaultProps = {};

exports.default = AcceptQuote;