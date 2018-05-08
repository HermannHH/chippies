'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFlexboxGrid = require('react-flexbox-grid');

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardGrid(_ref) {
  var data = _ref.data,
      el = _ref.el;

  var Card = el;
  return _react2.default.createElement(
    _reactFlexboxGrid.Grid,
    { fluid: true },
    _react2.default.createElement(
      _reactFlexboxGrid.Row,
      null,
      data.map(function (x) {
        return _react2.default.createElement(
          _reactFlexboxGrid.Col,
          { xs: 12, sm: 12, md: 6, lg: 4, key: x.id },
          _react2.default.createElement(
            _Pad2.default,
            {
              horizontal: { xs: 3 },
              vertical: { xs: 3 }
            },
            _react2.default.createElement(Card, x)
          )
        );
      })
    )
  );
}

CardGrid.propTypes = {
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired
  })).isRequired,
  el: _propTypes2.default.element.isRequired
};

// CardGrid.defaultProps = {
// };

exports.default = CardGrid;