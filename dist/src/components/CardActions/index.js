'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardPad = require('../CardPad');

var _CardPad2 = _interopRequireDefault(_CardPad);

var _FlexPosition = require('../FlexPosition');

var _FlexPosition2 = _interopRequireDefault(_FlexPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardActions(_ref) {
  var comps = _ref.comps,
      layout = _ref.layout;

  return _react2.default.createElement(
    _CardPad2.default,
    null,
    _react2.default.createElement(_FlexPosition2.default, {
      comps: comps,
      layout: layout
    })
  );
}

CardActions.propTypes = {
  comps: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  layout: _propTypes2.default.oneOf(['spread', 'left', 'right', 'center'])
};

CardActions.defaultProps = {
  layout: 'right'
};

exports.default = CardActions;

//# sourceMappingURL=index.js.map