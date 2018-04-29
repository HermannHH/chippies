'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    width: 100%;\n    position: relative;\n    ', ';\n'], ['\n    display: block;\n    width: 100%;\n    position: relative;\n    ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Display = require('../Display');

var _Display2 = _interopRequireDefault(_Display);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PositionContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n      > div {\n          text-align: ' + props.position + ';\n      };\n      \n    ';
});

/**
 * Used for normal images. Will not be progressive
 */

function ImageBlock(_ref) {
  var width = _ref.width,
      height = _ref.height,
      src = _ref.src,
      position = _ref.position,
      children = _ref.children;

  return _react2.default.createElement(
    PositionContainer,
    { position: position },
    _react2.default.createElement(
      _Pad2.default,
      {
        all: {
          xs: 3
        }
      },
      children || _react2.default.createElement(_Image2.default, { width: width, height: height, src: src })
    )
  );
}

ImageBlock.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  src: _propTypes2.default.string,
  position: _propTypes2.default.oneOf(['center', 'left', 'right']),
  children: _propTypes2.default.element
};

ImageBlock.defaultProps = {
  width: null,
  height: null,
  position: 'center',
  children: null,
  src: null
};

exports.default = ImageBlock;