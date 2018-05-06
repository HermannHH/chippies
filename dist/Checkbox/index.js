'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    position: relative;\n    padding-left: ', ';\n    cursor: pointer;\n    user-select: none;\n    font-size: ', ';\n    line-height: ', ';\n    text-rendering: optimizeLegibility;\n    font-smoothing: antialiased;\n    margin-bottom: 0px;\n    ', ';\n\n    > input {\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n    };\n\n    > span {\n        position: absolute;\n        top: 2px;\n        left:  ', ';\n        ', ';\n        height: 25px;\n        width: 25px;\n        border-radius: ', 'px;\n        background-color: ', ';\n\n        &:after {\n            content: "";\n            position: absolute;\n            display: none;\n        }\n    };\n\n    &:hover {\n        > input ~ span {\n            background-color: ', ';\n        };\n    };\n\n    > input:checked ~ span {\n        background-color: ', ';\n    };\n    \n      > input:checked ~ span:after {\n        display: block;\n      };\n\n    > span:after {\n        left: 9px;\n        top: 5px;\n        width: 5px;\n        height: 10px;\n        border: solid ', ';\n        border-width: 0 3px 3px 0;\n        -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n        transform: rotate(45deg);\n    };\n'], ['\n    display: block;\n    position: relative;\n    padding-left: ', ';\n    cursor: pointer;\n    user-select: none;\n    font-size: ', ';\n    line-height: ', ';\n    text-rendering: optimizeLegibility;\n    font-smoothing: antialiased;\n    margin-bottom: 0px;\n    ', ';\n\n    > input {\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n    };\n\n    > span {\n        position: absolute;\n        top: 2px;\n        left:  ', ';\n        ', ';\n        height: 25px;\n        width: 25px;\n        border-radius: ', 'px;\n        background-color: ', ';\n\n        &:after {\n            content: "";\n            position: absolute;\n            display: none;\n        }\n    };\n\n    &:hover {\n        > input ~ span {\n            background-color: ', ';\n        };\n    };\n\n    > input:checked ~ span {\n        background-color: ', ';\n    };\n    \n      > input:checked ~ span:after {\n        display: block;\n      };\n\n    > span:after {\n        left: 9px;\n        top: 5px;\n        width: 5px;\n        height: 10px;\n        border: solid ', ';\n        border-width: 0 3px 3px 0;\n        -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n        transform: rotate(45deg);\n    };\n']);

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

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_helpers.shevyConfig);
var content = shevy.content;


var LabelTag = _styledComponents2.default.label(_templateObject, function (props) {
  return props.labelPosition === 'left' ? '0px' : '35px';
}, content.fontSize, content.lineHeight, function (props) {
  return '\n      color: ' + props.theme.colors.grey['2'] + ';\n      font-weight: ' + props.theme.font.weight.standard + ';\n      font-family: ' + props.theme.font.family + ';\n    ';
}, function (props) {
  return props.labelPosition === 'right' && '0px';
}, function (props) {
  return props.labelPosition === 'left' && '\n          float: right;\n          margin-left: 10px;\n          top: 4px;\n        ';
}, function (props) {
  return props.theme.borders.radius;
}, function (props) {
  return props.theme.colors.grey['-1'];
}, function (props) {
  return props.theme.colors.grey['0'];
}, function (props) {
  return props.theme.colors.blue['0'];
}, function (props) {
  return props.theme.colors.white['0'];
});

/**
 * Styled wrapper for html's checkbox
 */

function Checkbox(_ref) {
  var theme = _ref.theme,
      isChecked = _ref.isChecked,
      handleChange = _ref.handleChange,
      labelPosition = _ref.labelPosition,
      label = _ref.label;

  return _react2.default.createElement(
    LabelTag,
    { theme: theme, labelPosition: labelPosition },
    label,
    _react2.default.createElement('input', {
      type: 'checkbox',
      checked: isChecked,
      onChange: handleChange
    }),
    _react2.default.createElement('span', null)
  );
}

Checkbox.propTypes = {
  theme: _propTypes2.default.shape(),
  isChecked: _propTypes2.default.bool.isRequired,
  label: _propTypes2.default.string.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  labelPosition: _propTypes2.default.oneOf(['left', 'right'])
};

Checkbox.defaultProps = {
  labelPosition: 'left',
  theme: _kratedTheme2.default
};

exports.default = Checkbox;