'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n'], ['\n    ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_helpers.shevyConfig);
var h1 = shevy.h1,
    h2 = shevy.h2,
    h3 = shevy.h3,
    h4 = shevy.h4,
    h5 = shevy.h5,
    h6 = shevy.h6;


var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n        margin: 0px;\n        ' + (props.withMargin && props.size === '1' && 'margin: ' + h1.marginBottom + ' 0px') + ';\n        ' + (props.withMargin && props.size === '2' && 'margin: ' + h2.marginBottom + ' 0px') + ';\n        ' + (props.withMargin && props.size === '3' && 'margin: ' + h3.marginBottom + ' 0px') + ';\n        ' + (props.withMargin && props.size === '4' && 'margin: ' + h4.marginBottom + ' 0px') + ';\n        ' + (props.withMargin && props.size === '5' && 'margin: ' + h5.marginBottom + ' 0px') + ';\n        ' + (props.withMargin && props.size === '6' && 'margin: ' + h6.marginBottom + ' 0px') + ';\n    ';
});

function HeadingGroup(_ref) {
  var size = _ref.size,
      mainText = _ref.mainText,
      subText = _ref.subText,
      withMargin = _ref.withMargin;

  return _react2.default.createElement(
    Container,
    { withMargin: withMargin, size: size },
    _react2.default.createElement(_Heading2.default, { text: mainText, size: size, withMargin: false }),
    _react2.default.createElement(
      _Paragraph2.default,
      { withMargin: false },
      subText
    )
  );
}

HeadingGroup.propTypes = {
  mainText: _propTypes2.default.string.isRequired,
  subText: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOf(['1', '2', '3', '4', '5', '6']),
  withMargin: _propTypes2.default.bool
};

HeadingGroup.defaultProps = {
  size: '3',
  withMargin: true
};

exports.default = HeadingGroup;