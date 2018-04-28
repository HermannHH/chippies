'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _TextAlign = require('../TextAlign');

var _TextAlign2 = _interopRequireDefault(_TextAlign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ColorDescription(_ref) {
  var name = _ref.name,
      hex = _ref.hex,
      inverse = _ref.inverse;

  var color = inverse ? 'white' : 'black';
  return _react2.default.createElement(
    _TextAlign2.default,
    { align: 'center' },
    _react2.default.createElement(_Label2.default, { text: name, color: color }),
    _react2.default.createElement(
      _Paragraph2.default,
      { color: color },
      hex
    )
  );
}

ColorDescription.propTypes = {
  name: _propTypes2.default.string.isRequired,
  hex: _propTypes2.default.string.isRequired,
  inverse: _propTypes2.default.bool
};

ColorDescription.defaultProps = {
  inverse: false
};

exports.default = ColorDescription;