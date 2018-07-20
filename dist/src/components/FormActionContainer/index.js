'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Mrg = require('../Mrg');

var _Mrg2 = _interopRequireDefault(_Mrg);

var _FlexPosition = require('../FlexPosition');

var _FlexPosition2 = _interopRequireDefault(_FlexPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wraps form items such as inputs
 */

// import styled from 'styled-components';

function FormActionContainer(_ref) {
  var actions = _ref.actions,
      flexType = _ref.flexType;

  return _react2.default.createElement(
    _Mrg2.default,
    { vertical: { xs: 5 } },
    _react2.default.createElement(_FlexPosition2.default, {
      comps: actions,
      layout: flexType
    })
  );
}

FormActionContainer.propTypes = {
  actions: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  flexType: _propTypes2.default.oneOf(['spread', 'left', 'right', 'center'])
};

FormActionContainer.defaultProps = {
  flexType: 'right'
};

exports.default = FormActionContainer;

//# sourceMappingURL=index.js.map