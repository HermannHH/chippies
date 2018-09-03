'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 170px;\n'], ['\n  position: relative;\n  width: 170px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  text-align: center;\n  width: 100%;\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  outline: none;\n  padding: 10px 45px;\n  ', ';\n'], ['\n  text-align: center;\n  width: 100%;\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  outline: none;\n  padding: 10px 45px;\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  width: 45px;\n  top: 0px;\n  text-align: center;\n  cursor: pointer;\n  height: 100%;\n  line-height: 48px;\n  font-size: 28px;\n  &:hover {\n    cursor: pointer;\n    background-color: ', '\n  }\n'], ['\n  position: absolute;\n  width: 45px;\n  top: 0px;\n  text-align: center;\n  cursor: pointer;\n  height: 100%;\n  line-height: 48px;\n  font-size: 28px;\n  &:hover {\n    cursor: pointer;\n    background-color: ', '\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  left: 0px;\n  border-radius: 4px 0px 0px 4px;\n  &:after {\n    content: \'-\';\n  }\n'], ['\n  left: 0px;\n  border-radius: 4px 0px 0px 4px;\n  &:after {\n    content: \'-\';\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  right: 0px;\n  border-radius: 0px 4px 4px 0px;\n  &:after {\n    content: \'+\';\n  }\n'], ['\n  right: 0px;\n  border-radius: 0px 4px 4px 0px;\n  &:after {\n    content: \'+\';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _shevyConfig = require('../shevyConfig');

var _shevyConfig2 = _interopRequireDefault(_shevyConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_shevyConfig2.default);
var content = shevy.content;

var NumericSpinContainer = _styledComponents2.default.div(_templateObject);

var InputContainer = _styledComponents2.default.input(_templateObject2, function (props) {
  return '\n    font-family: ' + props.theme.font.family + ';\n    background-color: ' + props.theme.colors.grey['-1'] + ';\n    color: ' + props.theme.colors.grey[2] + ';\n    border-radius: ' + props.theme.borders.radius + 'px;\n    font-weight: ' + props.theme.font.weight.standard + ';\n    line-height: ' + content.lineHeight + ';\n    font-size: ' + content.fontSize + ';\n    &:focus {\n      border-color: ' + props.theme.colors.grey[1] + ';\n    };\n  ';
});

var FidlerContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.colors.ocean['0'];
});

var Fiddle = FidlerContainer.withComponent('div');
var Decrease = Fiddle.extend(_templateObject4);

var Increase = Fiddle.extend(_templateObject5);

function NumericSpin(_ref) {
  var theme = _ref.theme,
      handleClickChange = _ref.handleClickChange,
      handleTypingChange = _ref.handleTypingChange,
      _value = _ref.value,
      id = _ref.id;

  return _react2.default.createElement(
    NumericSpinContainer,
    null,
    _react2.default.createElement(Decrease, { theme: theme, onClick: function onClick() {
        return handleClickChange({ id: id, value: function value() {
            return _value - 1;
          } });
      } }),
    _react2.default.createElement(InputContainer, {
      theme: theme,
      value: _value,
      onChange: handleTypingChange,
      id: id,
      name: 'numericSpin_' + id
    }),
    _react2.default.createElement(Increase, { theme: theme, onClick: function onClick() {
        return handleClickChange({ id: id, value: function value() {
            return _value + 1;
          } });
      } })
  );
}

NumericSpin.propTypes = {
  theme: _propTypes2.default.shape(),
  id: _propTypes2.default.string.isRequired,
  handleClickChange: _propTypes2.default.func.isRequired,
  handleTypingChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.number
};

NumericSpin.defaultProps = {
  theme: _kratedTheme2.default,
  value: 0
};

exports.default = NumericSpin;