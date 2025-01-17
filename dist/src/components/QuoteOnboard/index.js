'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BrandHeader = require('../BrandHeader');

var _BrandHeader2 = _interopRequireDefault(_BrandHeader);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _Mrg = require('../Mrg');

var _Mrg2 = _interopRequireDefault(_Mrg);

var _TextSection = require('../TextSection');

var _TextSection2 = _interopRequireDefault(_TextSection);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _FlexPosition = require('../FlexPosition');

var _FlexPosition2 = _interopRequireDefault(_FlexPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Shown to users after they accept/reject a quote as non-signed in user
 */

function QuoteOnboard(_ref) {
  var handleClick = _ref.handleClick,
      text = _ref.text;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Pad2.default,
      { horizontal: { xs: 4 } },
      _react2.default.createElement(_BrandHeader2.default, { size: '1', position: 'center' })
    ),
    _react2.default.createElement(
      _Pad2.default,
      { horizontal: { xs: 3, md: 5 } },
      _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(
          _TextSection2.default,
          { heading: 'Would you like to streamline your business workflow?' },
          text
        )
      ),
      _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(_FlexPosition2.default, {
          comps: [_react2.default.createElement(_Button2.default, { text: 'Yes please', raised: true, whiteText: true, color: 'red', handleClick: handleClick })],
          layout: 'center'
        })
      )
    )
  );
}

QuoteOnboard.propTypes = {
  handleClick: _propTypes2.default.func.isRequired,
  text: _propTypes2.default.string.isRequired
};

QuoteOnboard.defaultProps = {};

exports.default = QuoteOnboard;

//# sourceMappingURL=index.js.map