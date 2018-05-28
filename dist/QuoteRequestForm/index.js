'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formik = require('formik');

var _yup = require('yup');

var _reactFlexboxGrid = require('react-flexbox-grid');

var _customLocale = require('yup/lib/customLocale');

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

(0, _customLocale.setLocale)({
  mixed: {
    required: 'Is required'
  },
  string: {
    email: 'Must be a valid email address'
  }
});

function QuoteRequestForm() {
  var validationSchema = (0, _yup.object)().shape({
    firstName: (0, _yup.string)().required(),
    lastName: (0, _yup.string)().required(),
    cellPhone: (0, _yup.string)().required(),
    email: (0, _yup.string)().required().email(),
    companyName: (0, _yup.string)().required().required()
  });

  return _react2.default.createElement(_formik.Formik, {
    initialValues: {
      firstName: '',
      lastName: '',
      cellPhone: '',
      email: '',
      companyName: '',
      companyAddress: '',
      comment: ''
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting,
          setErrors = _ref.setErrors;

      console.log(values);
    },
    render: function render(_ref2) {
      var values = _ref2.values,
          errors = _ref2.errors,
          touched = _ref2.touched,
          handleChange = _ref2.handleChange,
          handleBlur = _ref2.handleBlur,
          handleSubmit = _ref2.handleSubmit,
          isSubmitting = _ref2.isSubmitting,
          isValid = _ref2.isValid;
      return _react2.default.createElement(
        _reactFlexboxGrid.Grid,
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit },
          _react2.default.createElement(
            _reactFlexboxGrid.Row,
            null,
            _react2.default.createElement(
              _reactFlexboxGrid.Col,
              { md: 12, lg: 6 },
              _react2.default.createElement(
                _FormInputContainer2.default,
                null,
                _react2.default.createElement(_TextInput2.default, {
                  id: 'firstName',
                  label: 'First Name',
                  placeholder: 'Your First Name',
                  handleChange: handleChange,
                  value: values.firstName,
                  handleBlur: handleBlur,
                  errors: touched.firstName && errors.firstName && errors.firstName
                })
              )
            ),
            _react2.default.createElement(
              _reactFlexboxGrid.Col,
              { md: 12, lg: 6 },
              _react2.default.createElement(
                _FormInputContainer2.default,
                null,
                _react2.default.createElement(_TextInput2.default, {
                  id: 'lastName',
                  label: 'Last Name',
                  placeholder: 'Your Last Name',
                  handleChange: handleChange,
                  value: values.lastName,
                  handleBlur: handleBlur,
                  errors: touched.lastName && errors.lastName && errors.lastName
                })
              )
            ),
            _react2.default.createElement(
              _reactFlexboxGrid.Col,
              { md: 12, lg: 6 },
              _react2.default.createElement(
                _FormInputContainer2.default,
                null,
                _react2.default.createElement(_TextInput2.default, {
                  id: 'cellPhone',
                  label: 'Cellphone',
                  placeholder: 'Your Cellphone Number',
                  handleChange: handleChange,
                  value: values.cellPhone,
                  handleBlur: handleBlur,
                  errors: touched.cellPhone && errors.cellPhone && errors.cellPhone
                })
              )
            ),
            _react2.default.createElement(
              _reactFlexboxGrid.Col,
              { md: 12, lg: 6 },
              _react2.default.createElement(
                _FormInputContainer2.default,
                null,
                _react2.default.createElement(_TextInput2.default, {
                  id: 'email',
                  label: 'Email Address',
                  placeholder: 'Your Email Address',
                  handleChange: handleChange,
                  value: values.email,
                  handleBlur: handleBlur,
                  errors: touched.email && errors.email && errors.email
                })
              )
            ),
            _react2.default.createElement(
              _reactFlexboxGrid.Col,
              { md: 12, lg: 6 },
              _react2.default.createElement(
                _FormInputContainer2.default,
                null,
                _react2.default.createElement(_TextInput2.default, {
                  id: 'companyName',
                  label: 'Company Name',
                  placeholder: 'Your Company Name',
                  handleChange: handleChange,
                  value: values.companyName,
                  handleBlur: handleBlur,
                  errors: touched.companyName && errors.companyName && errors.companyName
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
                  id: 'comment',
                  label: 'Additional Comments',
                  placeholder: 'Any comment that might help the seller give a more accurate quotation',
                  handleChange: handleChange,
                  value: values.comment,
                  handleBlur: handleBlur,
                  errors: touched.comment && errors.comment && errors.comment
                })
              )
            ),
            _react2.default.createElement(
              _reactFlexboxGrid.Col,
              { xs: 12 },
              _react2.default.createElement(_FormActionContainer2.default, {
                actions: [_react2.default.createElement(_Button2.default, {
                  text: 'Submit',
                  disabled: isSubmitting || !isValid,
                  type: 'submit',
                  raised: true,
                  whiteText: true,
                  isLoading: isSubmitting,
                  color: 'red'
                })]
              })
            )
          )
        )
      );
    }
  });
}

QuoteRequestForm.propTypes = {};

QuoteRequestForm.defaultProps = {};

exports.default = QuoteRequestForm;