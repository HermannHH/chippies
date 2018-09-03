'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0 ', ';\n  &:first-child {\n      margin-left: 0px;\n  };\n  &:last-child {\n      margin-right: 0px;\n  };\n'], ['\n  margin: 0 ', ';\n  &:first-child {\n      margin-left: 0px;\n  };\n  &:last-child {\n      margin-right: 0px;\n  };\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _shevyConfig = require('../shevyConfig');

var _shevyConfig2 = _interopRequireDefault(_shevyConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_shevyConfig2.default);
var bs = shevy.baseSpacing;


var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.layout === 'right' && 'justify-content: flex-end';
}, function (props) {
  return props.layout === 'spread' && 'justify-content: space-between';
}, function (props) {
  return props.layout === 'left' && 'justify-content: flex-start';
}, function (props) {
  return props.layout === 'center' && 'justify-content: center';
});

var CompContainer = _styledComponents2.default.div(_templateObject2, bs(0.5));

function FlexPosition(_ref) {
  var comps = _ref.comps,
      layout = _ref.layout;

  return _react2.default.createElement(
    Wrapper,
    { layout: layout },
    comps && comps.map(function (x, i) {
      return _react2.default.createElement(
        CompContainer,
        { key: i },
        x
      );
    })
  );
}

FlexPosition.propTypes = {
  comps: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  layout: _propTypes2.default.oneOf(['spread', 'left', 'right', 'center'])
};

FlexPosition.defaultProps = {
  layout: 'right'
};

exports.default = FlexPosition;