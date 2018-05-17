'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n'], ['\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n'], ['\n  display: inline-block;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  position: absolute;\n  right: 0px;\n'], ['\n  display: inline-block;\n  position: absolute;\n  right: 0px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Well = require('../Well');

var _Well2 = _interopRequireDefault(_Well);

var _ProgressiveImage = require('../ProgressiveImage');

var _ProgressiveImage2 = _interopRequireDefault(_ProgressiveImage);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _VerticalMiddle = require('../VerticalMiddle');

var _VerticalMiddle2 = _interopRequireDefault(_VerticalMiddle);

var _NumericSpin = require('../NumericSpin');

var _NumericSpin2 = _interopRequireDefault(_NumericSpin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImageContainer = _styledComponents2.default.div(_templateObject);

var HeadingContainer = _styledComponents2.default.div(_templateObject2);

var ActionsContainer = _styledComponents2.default.div(_templateObject3);

/**
 * Component that displays a LineItem in an interactive way, meaning that the user can change quantities, add discounts etc
 */

function InteractiveLineItem(_ref) {
  var id = _ref.id,
      imgSrc = _ref.imgSrc,
      title = _ref.title,
      handleClickChange = _ref.handleClickChange,
      handleTypingChange = _ref.handleTypingChange,
      value = _ref.value;

  return _react2.default.createElement(
    _Well2.default,
    null,
    _react2.default.createElement(
      _VerticalMiddle2.default,
      null,
      _react2.default.createElement(
        ImageContainer,
        null,
        _react2.default.createElement(_ProgressiveImage2.default, { src: imgSrc, rounded: true })
      ),
      _react2.default.createElement(
        HeadingContainer,
        null,
        _react2.default.createElement(
          _Pad2.default,
          { horizontal: { xs: 4 } },
          _react2.default.createElement(_Heading2.default, { text: title, size: '4', withMargin: false })
        )
      ),
      _react2.default.createElement(
        ActionsContainer,
        null,
        _react2.default.createElement(_NumericSpin2.default, {
          handleClickChange: handleClickChange,
          handleTypingChange: handleTypingChange,
          value: value,
          id: id
        })
      )
    )
  );
}

InteractiveLineItem.propTypes = {
  id: _propTypes2.default.string.isRequired,
  imgSrc: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  handleClickChange: _propTypes2.default.func.isRequired,
  handleTypingChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.number.isRequired
};

InteractiveLineItem.defaultProps = {};

exports.default = InteractiveLineItem;