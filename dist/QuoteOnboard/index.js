'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

/**
 * Shown to users after they accept/reject a quote as non-signed in user
 */

function QuoteOnboard(_ref) {
  _objectDestructuringEmpty(_ref);

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
          {
            heading: 'Would you like to streamline your business workflow?'
          },
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        )
      ),
      _react2.default.createElement(
        _Mrg2.default,
        { vertical: { xs: 5 } },
        _react2.default.createElement(_FlexPosition2.default, {
          comps: [_react2.default.createElement(_Button2.default, { text: 'Yes please', raised: true, whiteText: true, color: 'red' })],
          layout: 'center'
        })
      )
    )
  );
}

QuoteOnboard.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  src: _propTypes2.default.string.isRequired
};

QuoteOnboard.defaultProps = {
  width: null,
  height: null
};

exports.default = QuoteOnboard;