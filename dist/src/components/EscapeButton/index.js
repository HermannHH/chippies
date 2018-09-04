'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  &:hover {\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  &:hover {\n    cursor: pointer;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Small = require('../Small');

var _Small2 = _interopRequireDefault(_Small);

var _Display = require('../Display');

var _Display2 = _interopRequireDefault(_Display);

var _TextAlign = require('../TextAlign');

var _TextAlign2 = _interopRequireDefault(_TextAlign);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

function EscapeButton(_ref) {
  var handleClick = _ref.handleClick;

  return _react2.default.createElement(
    Container,
    { onClick: handleClick },
    _react2.default.createElement(
      _Display2.default,
      { type: 'block' },
      _react2.default.createElement(
        _Pad2.default,
        {
          all: { xs: 2 }
        },
        _react2.default.createElement(
          _TextAlign2.default,
          { align: 'center' },
          _react2.default.createElement(_Icon2.default, {
            icon: 'faTimes',
            size: 'lg'
          })
        )
      )
    ),
    _react2.default.createElement(
      _Display2.default,
      { type: 'block' },
      _react2.default.createElement(
        _Pad2.default,
        {
          top: { xs: 1 }
        },
        _react2.default.createElement(
          _TextAlign2.default,
          { align: 'center' },
          _react2.default.createElement(
            _Small2.default,
            null,
            'ESC to close'
          )
        )
      )
    )
  );
}

EscapeButton.propTypes = {
  handleClick: _propTypes2.default.func.isRequired
};

EscapeButton.defaultProps = {};

exports.default = EscapeButton;

//# sourceMappingURL=index.js.map