'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _HeadingGroup = require('../HeadingGroup');

var _HeadingGroup2 = _interopRequireDefault(_HeadingGroup);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TextSection(_ref) {
  var heading = _ref.heading,
      subHeading = _ref.subHeading,
      children = _ref.children,
      size = _ref.size;

  return _react2.default.createElement(
    'div',
    null,
    subHeading ? _react2.default.createElement(_HeadingGroup2.default, { mainText: heading, subText: subHeading, size: size }) : _react2.default.createElement(_Heading2.default, { text: heading, size: size }),
    _react2.default.createElement(
      _Paragraph2.default,
      null,
      children
    )
  );
}

TextSection.propTypes = {
  heading: _propTypes2.default.string.isRequired,
  subHeading: _propTypes2.default.string,
  children: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.string
};

TextSection.defaultProps = {
  subHeading: undefined,
  size: '3'
};

exports.default = TextSection;