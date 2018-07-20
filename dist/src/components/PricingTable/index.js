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

var _HeadingGroup = require('../HeadingGroup');

var _HeadingGroup2 = _interopRequireDefault(_HeadingGroup);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var propTypes = {};
var defaultProps = {};

function TableRow(_ref) {
  var n1 = _ref.n1,
      n1Align = _ref.n1Align,
      n2 = _ref.n2,
      n2Align = _ref.n2Align,
      n3 = _ref.n3,
      n3Align = _ref.n3Align;

  return _react2.default.createElement(
    _reactFlexview2.default,
    null,
    _react2.default.createElement(
      _reactFlexview2.default,
      {
        vAlignContent: 'center',
        hAlignContent: '' + n1Align || 'center',
        grow: 1,
        basis: '40%',
        style: { textAlign: '' + n1Align || 'center' }
      },
      n1
    ),
    _react2.default.createElement(
      _reactFlexview2.default,
      {
        vAlignContent: 'top',
        hAlignContent: '' + n2Align || 'center',
        grow: 1,
        basis: '20%',
        style: { textAlign: '' + n2Align || 'center' }
      },
      n2
    ),
    _react2.default.createElement(
      _reactFlexview2.default,
      {
        vAlignContent: 'top',
        hAlignContent: '' + n3Align || 'center',
        grow: 1,
        basis: '40%',
        style: { textAlign: '' + n3Align || 'center' }
      },
      n3
    )
  );
}

function PricingTable(_ref2) {
  _objectDestructuringEmpty(_ref2);

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _reactFlexview2.default,
      null,
      _react2.default.createElement(_reactFlexview2.default, {
        vAlignContent: 'center',
        hAlignContent: 'center',
        grow: 1,
        basis: '40%'
      }),
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          vAlignContent: 'center',
          hAlignContent: 'center',
          grow: 1,
          basis: '20%',
          style: { textAlign: 'center' }
        },
        _react2.default.createElement(_HeadingGroup2.default, { mainText: 'R0', subText: 'user / month', size: '3' })
      ),
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          vAlignContent: 'center',
          hAlignContent: 'center',
          grow: 1,
          basis: '20%'
        },
        _react2.default.createElement(_Heading2.default, { text: 'Simple Pricing', size: '4' })
      ),
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          vAlignContent: 'center',
          hAlignContent: 'center',
          grow: 1,
          basis: '20%'
        },
        _react2.default.createElement(_Heading2.default, { text: 'Simple Pricing', size: '4' })
      )
    ),
    _react2.default.createElement(
      _reactFlexview2.default,
      null,
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          vAlignContent: 'center',
          hAlignContent: 'center',
          grow: 1,
          basis: '40%'
        },
        _react2.default.createElement(_Label2.default, { text: 'Usage' }),
        _react2.default.createElement(
          _Paragraph2.default,
          null,
          '# Products'
        ),
        _react2.default.createElement(
          _Paragraph2.default,
          null,
          '# Products'
        ),
        _react2.default.createElement(
          _Paragraph2.default,
          null,
          '# Products'
        )
      ),
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          vAlignContent: 'top',
          hAlignContent: 'center',
          grow: 1,
          basis: '20%',
          style: { textAlign: 'center' }
        },
        _react2.default.createElement(_HeadingGroup2.default, { mainText: 'FREE', subText: 'Essential features', size: '6' })
      ),
      _react2.default.createElement(
        _reactFlexview2.default,
        {
          vAlignContent: 'top',
          hAlignContent: 'center',
          grow: 1,
          basis: '40%',
          style: { textAlign: 'center' }
        },
        _react2.default.createElement(_HeadingGroup2.default, { mainText: 'More coming soon', subText: 'We are constantly adding new features and will be releasing additional plans in the near future', size: '6' })
      )
    ),
    _react2.default.createElement(TableRow, {
      n1: _react2.default.createElement(_Label2.default, { text: 'Usage' }),
      n1Align: 'left'
    }),
    _react2.default.createElement(TableRow, {
      n1: _react2.default.createElement(
        _Paragraph2.default,
        null,
        '# of Products'
      ),
      n1Align: 'left',
      n2: _react2.default.createElement(
        _Paragraph2.default,
        null,
        'Unlimited'
      )
    })
  );
}

PricingTable.propTypes = propTypes;
PricingTable.defaultProps = defaultProps;

exports.default = PricingTable;

//# sourceMappingURL=index.js.map