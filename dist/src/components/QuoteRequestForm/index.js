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

var _PlacesInput = require('../PlacesInput');

var _PlacesInput2 = _interopRequireDefault(_PlacesInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _yup.setLocale)({
  mixed: {
    required: 'Is required'
  },
  string: {
    email: 'Must be a valid email address'
  }
});

function QuoteRequestForm(_ref) {
  var submit = _ref.submit;

  var validationSchema = (0, _yup.object)().shape({
    firstName: (0, _yup.string)().required(),
    lastName: (0, _yup.string)().required(),
    cellPhone: (0, _yup.string)().required(),
    email: (0, _yup.string)().required().email(),
    companyName: (0, _yup.string)().required().required(),
    companyAddress: (0, _yup.object)().required().shape({
      label: (0, _yup.string)().required(),
      lat: (0, _yup.number)().required(),
      lng: (0, _yup.number)().required(),
      placeId: (0, _yup.string)().required()
    })
  });

  return _react2.default.createElement(_formik.Formik, {
    initialValues: {
      firstName: '',
      lastName: '',
      cellPhone: '',
      email: '',
      companyName: '',
      companyAddress: {
        label: '',
        lat: '',
        lng: '',
        placeId: ''
      },
      comment: ''
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, _ref2) {
      var setSubmitting = _ref2.setSubmitting,
          setErrors = _ref2.setErrors;

      submit(values);
    },
    render: function render(_ref3) {
      var values = _ref3.values,
          errors = _ref3.errors,
          touched = _ref3.touched,
          handleChange = _ref3.handleChange,
          handleBlur = _ref3.handleBlur,
          handleSubmit = _ref3.handleSubmit,
          isSubmitting = _ref3.isSubmitting,
          isValid = _ref3.isValid,
          setFieldValue = _ref3.setFieldValue;
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
                { position: 'left' },
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
                { position: 'right' },
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
                { position: 'left' },
                _react2.default.createElement(_TextInput2.default, {
                  id: 'cellPhone',
                  label: 'Cellphone',
                  placeholder: 'Your Cellphone Number',
                  handleChange: handleChange,
                  value: values.cellPhone,
                  handleBlur: handleBlur,
                  errors: touched.cellPhone && errors.cellPhone && errors.cellPhone,
                  type: 'phone'
                })
              )
            ),
            _react2.default.createElement(
              _reactFlexboxGrid.Col,
              { md: 12, lg: 6 },
              _react2.default.createElement(
                _FormInputContainer2.default,
                { position: 'right' },
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
                { position: 'left' },
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
              { md: 12, lg: 6 },
              _react2.default.createElement(
                _FormInputContainer2.default,
                { position: 'right' },
                _react2.default.createElement(_PlacesInput2.default, {
                  id: 'companyAddress',
                  label: 'Company Address',
                  placeholder: 'Your Company Address',
                  handleSelect: function handleSelect(_ref4) {
                    var label = _ref4.label,
                        placeId = _ref4.placeId,
                        lat = _ref4.lat,
                        lng = _ref4.lng;
                    return setFieldValue('companyAddress', {
                      label: label, placeId: placeId, lat: lat, lng: lng
                    });
                  },
                  value: values.companyAddress.label,
                  handleBlur: handleBlur,
                  errors: touched.companyAddress && errors.companyAddress && errors.companyAddress
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

QuoteRequestForm.propTypes = {
  submit: _propTypes2.default.func.isRequired
};

QuoteRequestForm.defaultProps = {};

exports.default = QuoteRequestForm;

//# sourceMappingURL=index.js.map