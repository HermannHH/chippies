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

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _viewPort = require('../viewPort');

var _viewPort2 = _interopRequireDefault(_viewPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  theme: _propTypes2.default.shape({})
};
var defaultProps = {
  theme: _kratedTheme2.default
};

function FeatureTable(_ref) {
  var theme = _ref.theme;

  function cell(content, styles) {
    return _react2.default.createElement(
      _reactFlexview2.default,
      { vAlignContent: 'center', hAlignContent: 'center', width: '25%', style: styles },
      content
    );
  }
  return _react2.default.createElement(
    _reactFlexview2.default,
    { wrap: true },
    cell(),
    cell(_react2.default.createElement(_Heading2.default, { text: 'Pupper', size: '6' })),
    cell(_react2.default.createElement(_Heading2.default, { text: 'Doggo', size: '6' })),
    cell(_react2.default.createElement(_Heading2.default, { text: 'Woofer', size: '6' })),
    cell(_react2.default.createElement(_Heading2.default, { text: 'General', size: '6', color: 'white' }), {
      backgroundColor: theme.colors.blue['0']
    }),
    cell(undefined, {
      backgroundColor: theme.colors.blue['0']
    }),
    cell(undefined, {
      backgroundColor: theme.colors.blue['0']
    }),
    cell(undefined, {
      backgroundColor: theme.colors.blue['0']
    }),
    cell(_react2.default.createElement(_Heading2.default, { text: 'Access', size: '6' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Label2.default, {
      text: 'Coming soon',
      backgroundColor: 'green',
      backgroundShade: '0',
      color: 'white',
      shade: '0' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Label2.default, {
      text: 'Coming soon',
      backgroundColor: 'green',
      backgroundShade: '0',
      color: 'white',
      shade: '0' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Heading2.default, { text: 'Access', size: '6' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Heading2.default, { text: 'General', size: '6', color: 'white' }), {
      backgroundColor: theme.colors.blue['0']
    }),
    cell(undefined, {
      backgroundColor: theme.colors.blue['0']
    }),
    cell(undefined, {
      backgroundColor: theme.colors.blue['0']
    }),
    cell(undefined, {
      backgroundColor: theme.colors.blue['0']
    }),
    cell(_react2.default.createElement(_Heading2.default, { text: 'Access', size: '6' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Heading2.default, { text: 'Access', size: '6' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    }),
    cell(_react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' }), {
      borderBottom: 'thin solid',
      borderColor: theme.colors.grey['-1']
    })
  );
}

FeatureTable.propTypes = propTypes;
FeatureTable.defaultProps = defaultProps;

exports.default = (0, _viewPort2.default)(FeatureTable);

//# sourceMappingURL=index.js.map