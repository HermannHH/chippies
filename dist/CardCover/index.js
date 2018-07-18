'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ProgressiveImage = require('../ProgressiveImage');

var _ProgressiveImage2 = _interopRequireDefault(_ProgressiveImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardCoverWrapper = _styledComponents2.default.div(_templateObject);

function CardCover(_ref) {
  var src = _ref.src;

  return _react2.default.createElement(
    CardCoverWrapper,
    null,
    _react2.default.createElement(_ProgressiveImage2.default, {
      height: '200px',
      src: src
    })
  );
}

CardCover.propTypes = {
  src: _propTypes2.default.string.isRequired
};

exports.default = CardCover;