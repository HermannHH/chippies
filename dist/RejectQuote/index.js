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

var _TextSection = require('../TextSection');

var _TextSection2 = _interopRequireDefault(_TextSection);

var _Toggle = require('../Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _TextArea = require('../TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Well = require('../Well');

var _Well2 = _interopRequireDefault(_Well);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RejectQuote(_ref) {
  var referenceNumber = _ref.referenceNumber,
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
      _react2.default.createElement(_HeadingGroup2.default, {
        mainText: 'Reject quotation',
        subText: 'Please confirm the details below in order to reject quotation #' + referenceNumber
      }),
      _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(
          _Well2.default,
          null,
          _react2.default.createElement(
            _TextSection2.default,
            { heading: 'Krated\'s Disclaimer', size: '6' },
            'Krated will not be liable for any loss or damage which you may suffer in any way at\n            all, however it may arise at all, which results from: phishing, fraud, a loss, theft\n            or compromise of any of your passwords, cards or codes; any mistakes made by you in\n            giving us any instructions, including (but not only) any incorrect information given\n            to Krated by you; any interruption, malfunction, downtime or other failure of the\n            Krated\u2019s Website or any third party system or part of it for any reason; anything at\n            all to do with your dealings and transactions with any third parties found or\n            mentioned on the Krated website as these are strictly between you and such third\n            parties; any loss or damage of your personal information or other data that occurs,\n            directly or indirectly as a result of interception, systems malfunction, data theft,\n            third party systems, unlawful access to or theft of data; computer viruses,\n            programming defects or destructive code on our system or third party systems; any\n            event (also known as events of force majeure) which are beyond our control; LIMITATION\n            OF LIABILITY: Under no circumstances shall Krated be liable for any indirect or\n            consequential damages, or amounts for loss of income, profits, or savings arising out\n            of or relating to the performance or failure to perform of the third party under the\n            Agreement with them. DISPUTE REGARDING AGREEMENT WITH THIRD PARTIES: Krated only runs\n            the WEBSITE in conjunction with certain third parties, so you agree that you will not\n            hold it liable in any way for any dispute that you may have with ' + seller + '. Any such\n            dispute must be taken up directly with ' + seller + ' without involving Krated in any way.\n            Krated will in no way be responsible or liable for anything said to you, correct or\n            otherwise, by ' + seller + ' or for any actions or omissions by ' + seller + '.'
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
          comps: [_react2.default.createElement(_Checkbox2.default, {
            isChecked: termsChecked,
            handleChange: handleTermsChecked,
            label: 'I agree to the terms of this quotation'
          })],
          layout: 'right'
        })
      ),
      _react2.default.createElement(_Mrg2.default, { vertical: { xs: 5 } }),
      _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(_FlexPosition2.default, {
          comps: [_react2.default.createElement(_Button2.default, {
            text: 'I want to accept this quotation',
            handleClick: handleAccept,
            upcase: false
          }), _react2.default.createElement(_Button2.default, {
            text: 'Reject',
            raised: true,
            whiteText: true,
            disabled: !termsChecked,
            handleClick: handleReject,
            color: 'red'
          })],
          layout: 'spread'
        })
      )
    )
  );
}

RejectQuote.propTypes = {
  referenceNumber: _propTypes2.default.string.isRequired,
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

RejectQuote.defaultProps = {};

exports.default = RejectQuote;