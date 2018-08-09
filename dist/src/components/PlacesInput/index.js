'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    padding-left: ', ';\n    margin: ', ' 0;\n'], ['\n    padding-left: ', ';\n    margin: ', ' 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: ', ' 0;\n'], ['\n    margin: ', ' 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  > .geosuggest {\n      position: relative;\n      z-index: 1;\n    > .geosuggest__input-wrapper {\n      > .geosuggest__input{\n        z-index: 1;\n        box-sizing: border-box;\n        border: 2px solid transparent;\n        outline: none;\n        text-overflow: ellipses;\n        display: block;\n        width: 100%;\n        resize: none;\n        ', ';\n      }\n    }\n    > .geosuggest__suggests-wrapper {\n      z-index: 9;\n      padding: 0 0.5%;\n      position: absolute;\n      width: 99%;\n       >.geosuggest__suggests{\n         ', ';\n         list-style-type: none;\n         padding: 0px;\n         margin: 0px;\n         &--hidden{\n          display: none;\n         };\n         > .geosuggest__item {\n            ', ';\n       }\n    }\n  }\n'], ['\n  > .geosuggest {\n      position: relative;\n      z-index: 1;\n    > .geosuggest__input-wrapper {\n      > .geosuggest__input{\n        z-index: 1;\n        box-sizing: border-box;\n        border: 2px solid transparent;\n        outline: none;\n        text-overflow: ellipses;\n        display: block;\n        width: 100%;\n        resize: none;\n        ', ';\n      }\n    }\n    > .geosuggest__suggests-wrapper {\n      z-index: 9;\n      padding: 0 0.5%;\n      position: absolute;\n      width: 99%;\n       >.geosuggest__suggests{\n         ', ';\n         list-style-type: none;\n         padding: 0px;\n         margin: 0px;\n         &--hidden{\n          display: none;\n         };\n         > .geosuggest__item {\n            ', ';\n       }\n    }\n  }\n']);

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

var _reactGeosuggest = require('react-geosuggest');

var _reactGeosuggest2 = _interopRequireDefault(_reactGeosuggest);

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

var InputContainerTag = _styledComponents2.default.div(_templateObject3, function (props) {
  return '\n          background-color: ' + props.theme.colors.grey['-1'] + ';\n          border-radius: ' + props.theme.borders.radius + 'px;\n          font-size: ' + content.fontSize + ';\n          color: ' + props.theme.colors.grey[2] + ';\n          line-height: ' + content.lineHeight + ';\n          font-family: ' + props.theme.font.family + ';\n          font-weight: ' + props.theme.font.weight.standard + ';\n          padding: ' + bs(0.333) + ';\n          &::placeholder{\n            color: ' + props.theme.colors.grey[1] + ';\n          };\n          &:focus {\n            border-color: ' + props.theme.colors.grey[1] + ';\n            ' + (props.hasError && 'border-color: ' + props.theme.colors.red[0]) + ';\n          }\n          ' + (props.hasError && 'border-color: ' + props.theme.colors.red[0]) + ';\n          ' + (props.hardText && 'padding-right: 90px') + ';\n        ';
}, function (props) {
  return '\n           border-bottom-right-radius: ' + props.theme.borders.radius + 'px;\n           border-bottom-left-radius: ' + props.theme.borders.radius + 'px;\n           box-shadow: ' + props.theme.box.shadow.medium + ';\n           background-color: ' + props.theme.colors.white['0'] + ';\n         ';
}, function (props) {
  return '\n                background-color: ' + props.theme.colors.white['0'] + ';\n                font-size: ' + content.fontSize + ';\n                color: ' + props.theme.colors.grey[2] + ';\n                line-height: ' + content.lineHeight + ';\n                font-family: ' + props.theme.font.family + ';\n                font-weight: ' + props.theme.font.weight.standard + ';\n                padding: ' + bs(0.5) + ';\n                &:hover{\n                  cursor: pointer;\n                  background-color: ' + props.theme.colors.grey['-1'] + ';\n                }\n                &--active {\n                   background-color: ' + props.theme.colors.ocean['-1'] + ';\n                };\n            ';
});

function PlacesInput(_ref) {
  var theme = _ref.theme,
      placeholder = _ref.placeholder,
      value = _ref.value,
      errors = _ref.errors,
      handleSelect = _ref.handleSelect,
      handleFocus = _ref.handleFocus,
      handleBlur = _ref.handleBlur,
      label = _ref.label,
      type = _ref.type,
      id = _ref.id,
      tabIndex = _ref.tabIndex;

  function placeSelected(suggest) {
    handleSelect({
      label: suggest.label,
      lat: suggest.location.lat,
      lng: suggest.location.lng,
      placeId: suggest.placeId
    });
  }

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
    _react2.default.createElement(
      InputContainerTag,
      {
        theme: theme,
        hasError: hasError
      },
      _react2.default.createElement(_reactGeosuggest2.default, {
        placeholder: placeholder,
        country: ['ZA'],
        onFocus: handleFocus,
        onBlur: handleBlur,
        onSuggestSelect: function onSuggestSelect(select) {
          return placeSelected(select);
        }
      })
    ),
    hasError && _react2.default.createElement(
      InputErrorsContainer,
      null,
      _react2.default.createElement(_InputErrors2.default, { errors: errorArray })
    )
  );
}

PlacesInput.propTypes = {
  theme: _propTypes2.default.shape(),
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  handleSelect: _propTypes2.default.func.isRequired,
  handleFocus: _propTypes2.default.func,
  handleBlur: _propTypes2.default.func,
  errors: _propTypes2.default.oneOfType(_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string),
  label: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['text', 'email', 'password']),
  id: _propTypes2.default.string.isRequired,
  tabIndex: _propTypes2.default.string
};

PlacesInput.defaultProps = {
  theme: _kratedTheme2.default,
  placeholder: undefined,
  handleFocus: undefined,
  handleBlur: undefined,
  label: undefined,
  errors: [],
  type: 'text',
  tabIndex: undefined
};

exports.default = PlacesInput;

//# sourceMappingURL=index.js.map