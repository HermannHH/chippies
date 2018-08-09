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

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import ReactPlaceholder from 'react-placeholder';
// import kratedTheme from 'krated-theme';
// import shevyConfig from '../shevyConfig';

var Wrapper = _styledComponents2.default.div(_templateObject);

/**
 * Standard card container padding
 */

function CardPad(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(
      _Pad2.default,
      { horizontal: { xs: 4 }, vertical: { xs: 4 } },
      children
    )
  );
}

CardPad.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired
};

exports.default = CardPad;

//# sourceMappingURL=index.js.map