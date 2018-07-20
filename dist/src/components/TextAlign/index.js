'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  ', ';\n'], ['\n  width: 100%;\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n    text-align: ' + props.align + ';\n  ';
});

function TextAlign(_ref) {
  var children = _ref.children,
      align = _ref.align;

  return _react2.default.createElement(
    Container,
    { align: align },
    children
  );
}

TextAlign.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  align: _propTypes2.default.oneOf(['left', 'center', 'right', 'justified'])
};

TextAlign.defaultProps = {
  align: 'left'
};

exports.default = TextAlign;

//# sourceMappingURL=index.js.map