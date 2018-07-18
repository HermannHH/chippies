'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _viewPort = require('../viewPort');

var _viewPort2 = _interopRequireDefault(_viewPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  cells: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    key: _propTypes2.default.string.isRequired,
    elem: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string]).isRequired,
    type: _propTypes2.default.oneOf(['heading', 'section', 'default']).isRequired
  }).isRequired).isRequired
};
var defaultProps = {};

function FeatureTable(_ref) {
  var cells = _ref.cells;

  return _react2.default.createElement(
    _reactFlexview2.default,
    { column: true },
    _react2.default.createElement(_Heading2.default, { text: 'Compare the features', size: '4' }),
    _react2.default.createElement(
      _reactFlexview2.default,
      { width: '100%', column: false, wrap: true },
      cells.map(function (x) {
        return _react2.default.createElement(
          _reactFlexview2.default,
          {
            width: '25%',
            vAlignContent: 'center',
            key: x.id,
            style: x.type === 'section' && { backgroundColor: 'red' }
          },
          x.elem
        );
      })
    )
  );
}

FeatureTable.propTypes = propTypes;
FeatureTable.defaultProps = defaultProps;

exports.default = (0, _viewPort2.default)(FeatureTable);