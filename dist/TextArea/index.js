'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    padding-left: ', ';\n    margin: ', ' 0;\n'], ['\n    padding-left: ', ';\n    margin: ', ' 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: ', ' 0;\n'], ['\n    margin: ', ' 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  outline: none;\n  text-overflow: ellipses;\n  display: block;\n  width: 100%;\n  resize: none;\n  height: 220px;\n  ', ';\n'], ['\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  outline: none;\n  text-overflow: ellipses;\n  display: block;\n  width: 100%;\n  resize: none;\n  height: 220px;\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _shevyConfig = require('../shevyConfig');

var _shevyConfig2 = _interopRequireDefault(_shevyConfig);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _InputErrors = require('../InputErrors');

var _InputErrors2 = _interopRequireDefault(_InputErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_shevyConfig2.default);
var content = shevy.content,
    bs = shevy.baseSpacing;


var LabelContainer = _styledComponents2.default.div(_templateObject, bs(0.25), bs(0.25));

var InputErrorsContainer = _styledComponents2.default.div(_templateObject2, bs(0.25));

var TextAreaTag = _styledComponents2.default.textarea(_templateObject3, function (props) {
  return '\n    background-color: ' + props.theme.colors.grey['-1'] + ';\n    border-radius: ' + props.theme.borders.radius + 'px;\n    font-size: ' + content.fontSize + ';\n    color: ' + props.theme.colors.grey[2] + ';\n    line-height: ' + content.lineHeight + ';\n    font-family: ' + props.theme.font.family + ';\n    font-weight: ' + props.theme.font.weight.standard + ';\n    padding: ' + bs(0.333) + ';\n    &::placeholder{\n      color: ' + props.theme.colors.grey[1] + ';\n    };\n    &:focus {\n      border-color: ' + props.theme.colors.grey[1] + ';\n      ' + (props.hasError && 'border-color: ' + props.theme.colors.red[0]) + ';\n    }\n    ' + (props.hasError && 'border-color: ' + props.theme.colors.red[0]) + ';\n    ' + (props.hardText && 'padding-right: 90px') + ';\n  ';
});

function TextArea(_ref) {
  var theme = _ref.theme,
      placeholder = _ref.placeholder,
      value = _ref.value,
      errors = _ref.errors,
      handleChange = _ref.handleChange,
      handleFocus = _ref.handleFocus,
      handleBlur = _ref.handleBlur,
      label = _ref.label,
      id = _ref.id,
      tabIndex = _ref.tabIndex;

  var errorArray = [];
  if (typeof errors === 'string') {
    errorArray = errorArray.concat(errors);
  } else {
    errorArray = errors;
  }
  var hasError = errorArray.length > 0;
  var labelColor = hasError ? 'red' : 'grey';
  var labelShade = hasError ? '0' : '1';
  return _react2.default.createElement(
    'div',
    null,
    label && _react2.default.createElement(
      LabelContainer,
      null,
      _react2.default.createElement(_Label2.default, { text: label, color: labelColor, shade: labelShade })
    ),
    _react2.default.createElement(TextAreaTag, {
      placeholder: placeholder,
      theme: theme,
      value: value,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      hasError: hasError,
      id: id,
      name: id,
      autoComplete: 'off',
      tabIndex: tabIndex
    }),
    hasError && _react2.default.createElement(
      InputErrorsContainer,
      null,
      _react2.default.createElement(_InputErrors2.default, { errors: errorArray })
    )
  );
}

TextArea.propTypes = {
  theme: _propTypes2.default.shape(),
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  handleFocus: _propTypes2.default.func,
  handleBlur: _propTypes2.default.func,
  errors: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string]),
  label: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  tabIndex: _propTypes2.default.string
};

TextArea.defaultProps = {
  theme: _kratedTheme2.default,
  placeholder: undefined,
  handleFocus: undefined,
  handleBlur: undefined,
  label: undefined,
  errors: [],
  tabIndex: undefined
};

exports.default = TextArea;