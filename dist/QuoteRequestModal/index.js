'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFlexboxGrid = require('react-flexbox-grid');

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

var _FormInputContainer = require('../FormInputContainer');

var _FormInputContainer2 = _interopRequireDefault(_FormInputContainer);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormActionContainer = require('../FormActionContainer');

var _FormActionContainer2 = _interopRequireDefault(_FormActionContainer);

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _TextArea = require('../TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QuoteRequestModal(_ref) {
  var closeModal = _ref.closeModal,
      items = _ref.items,
      handleQtyClickChange = _ref.handleQtyClickChange,
      handleQtyTypingChange = _ref.handleQtyTypingChange,
      handleSubmit = _ref.handleSubmit;

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
          src: items[x].src,
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
    _react2.default.createElement(_HeadingGroup2.default, { mainText: 'Your company details', subText: 'Your company & personal information is required by the seller to generate a professional quotation that can be personalised for you' }),
    _react2.default.createElement(
      _Pad2.default,
      {
        vertical: { xs: 3 },
        bottom: { xs: 6 }
      },
      _react2.default.createElement(
        _reactFlexboxGrid.Grid,
        { fluid: true },
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          null,
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, md: 6 },
            _react2.default.createElement(
              _FormInputContainer2.default,
              null,
              _react2.default.createElement(_TextInput2.default, {
                placeholder: 'First Name',
                handleChange: function handleChange() {
                  return alert('effew');
                },
                value: 'Hello world',
                label: 'First Name',
                id: 'firstName',
                tabIndex: 0
              })
            )
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, md: 6 },
            _react2.default.createElement(
              _FormInputContainer2.default,
              null,
              _react2.default.createElement(_TextInput2.default, {
                placeholder: 'Last Name',
                handleChange: function handleChange() {
                  return alert('effew');
                },
                value: 'Hello world',
                label: 'Last Name',
                id: 'lastName',
                tabIndex: 1
              })
            )
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, md: 6 },
            _react2.default.createElement(
              _FormInputContainer2.default,
              null,
              _react2.default.createElement(_TextInput2.default, {
                placeholder: 'Cellphone Number',
                handleChange: function handleChange() {
                  return alert('effew');
                },
                value: 'Hello world',
                label: 'Cellphone Number',
                id: 'cellphoneNumber'
              })
            )
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, md: 6 },
            _react2.default.createElement(
              _FormInputContainer2.default,
              null,
              _react2.default.createElement(_TextInput2.default, {
                placeholder: 'Email',
                handleChange: function handleChange() {
                  return alert('effew');
                },
                value: 'Hello world',
                label: 'Email',
                id: 'email'
              })
            )
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, md: 6 },
            _react2.default.createElement(
              _FormInputContainer2.default,
              null,
              _react2.default.createElement(_TextInput2.default, {
                placeholder: 'Company Name',
                handleChange: function handleChange() {
                  return alert('effew');
                },
                value: 'Hello world',
                label: 'Company Name',
                id: 'companyName'
              })
            )
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, md: 6 },
            _react2.default.createElement(
              _FormInputContainer2.default,
              null,
              _react2.default.createElement(_TextInput2.default, {
                placeholder: 'Business Address',
                handleChange: function handleChange() {
                  return alert('effew');
                },
                value: 'Hello world',
                label: 'Business Address',
                id: 'businessAddress'
              })
            )
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(
              _FormInputContainer2.default,
              null,
              _react2.default.createElement(_TextArea2.default, {
                placeholder: 'Comment',
                handleChange: function handleChange() {
                  return alert('effew');
                },
                value: 'Hello world',
                label: 'Comment',
                id: 'comment'
              })
            )
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(_FormActionContainer2.default, {
              actions: [_react2.default.createElement(_Button2.default, { text: 'handleSubmit', handleClick: handleSubmit, raised: true, whiteText: true, color: 'red' })]
            })
          )
        )
      )
    )
  );
}

QuoteRequestModal.propTypes = {
  closeModal: _propTypes2.default.func.isRequired,
  handleQtyClickChange: _propTypes2.default.func.isRequired,
  handleQtyTypingChange: _propTypes2.default.func.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired
};

QuoteRequestModal.defaultProps = {};

exports.default = QuoteRequestModal;