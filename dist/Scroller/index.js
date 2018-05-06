'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  overflow-x: none;\n  overflow-y: auto;\n  height: ', ';\n'], ['\n  width: 100%;\n  overflow-x: none;\n  overflow-y: auto;\n  height: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import { Scrollbars } from 'react-custom-scrollbars';


var ScrollerWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.height + 'px';
});

/**
 * Fills the width (auto) & height (requires px number for height) of parent. Any vertical overflow will be scrollable
 */

function Scroller(_ref) {
  var children = _ref.children,
      height = _ref.height;

  return _react2.default.createElement(
    ScrollerWrapper,
    { height: height },
    children
  );
}

Scroller.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  height: _propTypes2.default.number.isRequired
};

exports.default = Scroller;