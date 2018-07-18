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

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _viewPort = require('../viewPort');

var _viewPort2 = _interopRequireDefault(_viewPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  tabletAndUp: _propTypes2.default.bool.isRequired,
  summaryOne: _propTypes2.default.func.isRequired,
  summaryTwo: _propTypes2.default.func.isRequired,
  summaryThree: _propTypes2.default.element.isRequired,
  featureTable: _propTypes2.default.element.isRequired,
  width: _propTypes2.default.number.isRequired
};
var defaultProps = {};

function LayoutPricingPlan(_ref) {
  var tabletAndUp = _ref.tabletAndUp,
      width = _ref.width,
      summaryOne = _ref.summaryOne,
      summaryTwo = _ref.summaryTwo,
      summaryThree = _ref.summaryThree,
      featureTable = _ref.featureTable;

  var summaryWidth = tabletAndUp ? '33%' : '100%';
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _reactFlexview2.default,
      { column: !tabletAndUp, width: '100%' },
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          vAlignContent: 'center',
          hAlignContent: 'center',
          width: '33%',
          style: summaryOne && { border: 'thin solid red', flex: '1' },
          grow: 1
        },
        _react2.default.createElement(
          _Pad2.default,
          { all: { xs: 4 } },
          summaryOne || 'Summary One'
        )
      ),
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          vAlignContent: 'center',
          hAlignContent: 'center',
          style: summaryThree && { border: 'thin solid red', flex: '2' },
          basis: '66%',
          grow: 1
        },
        _react2.default.createElement(
          _Pad2.default,
          { all: { xs: 4 }, style: { flex: '1' } },
          summaryThree || 'Summary Three'
        )
      )
    ),
    _react2.default.createElement(
      _reactFlexview2.default,
      { width: width },
      _react2.default.createElement(
        _Pad2.default,
        { all: { xs: 4 } },
        _react2.default.createElement(
          _reactFlexview2.default,
          {
            vAlignContent: 'center',
            hAlignContent: 'center',
            width: width,
            style: !featureTable && { border: 'thin solid red' }
          },
          featureTable || 'FeatureTable'
        )
      )
    )
  );
}

LayoutPricingPlan.propTypes = propTypes;
LayoutPricingPlan.defaultProps = defaultProps;

exports.default = (0, _viewPort2.default)(LayoutPricingPlan);