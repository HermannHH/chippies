'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 5px;\n  font-size: ', ';\n  line-height: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n'], ['\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 5px;\n  font-size: ', ';\n  line-height: ', ';\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\n'], ['\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: ', ';\n  border-collapse: collapse;\n  text-align: left;\n  ', ';\n'], ['\n  padding: ', ';\n  border-collapse: collapse;\n  text-align: left;\n  ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: ', ';\n  border-collapse: collapse;\n  ', ';\n'], ['\n  padding: ', ';\n  border-collapse: collapse;\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shevyjs = require('shevyjs');

var _shevyjs2 = _interopRequireDefault(_shevyjs);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shevy = new _shevyjs2.default(_helpers.shevyConfig);
var content = shevy.content,
    bs = shevy.baseSpacing;


var TableTag = _styledComponents2.default.table(_templateObject, content.fontSize, content.lineHeight, function (props) {
  return '\n    font-family: ' + props.theme.font.family + ';\n  ';
});

var RowTag = _styledComponents2.default.tr(_templateObject2);

var HeaderTag = _styledComponents2.default.th(_templateObject3, bs(0.25), function (props) {
  return '\n    color: ' + props.theme.colors.black['-1'] + ';\n    border: 1px solid ' + props.theme.colors.grey['-1'] + ';\n    font-weight: ' + props.theme.font.weight.bold + ';\n  ';
});

var DataTag = _styledComponents2.default.td(_templateObject4, bs(0.25), function (props) {
  return '\n    color: ' + props.theme.colors.grey['2'] + ';\n    ' + (!props.noBorder && 'border: 1px solid ' + props.theme.colors.grey['-1']) + ';\n    ' + (props.right ? 'text-align: right' : 'text-align: left') + ';\n    font-weight: ' + (props.bold ? '' + props.theme.font.weight.bold : '' + props.theme.font.weight.standard) + ';\n  ';
});

/**
 * Used to LineItems line items on a quotation or order
 */

function LineItems(_ref) {
  var theme = _ref.theme,
      data = _ref.data;

  return _react2.default.createElement(
    TableTag,
    { theme: theme },
    _react2.default.createElement(
      RowTag,
      { theme: theme },
      _react2.default.createElement(
        HeaderTag,
        { theme: theme },
        'Name'
      ),
      _react2.default.createElement(
        HeaderTag,
        { theme: theme },
        'SKU'
      ),
      _react2.default.createElement(
        HeaderTag,
        { theme: theme },
        'QTY'
      ),
      _react2.default.createElement(
        HeaderTag,
        { theme: theme },
        'Item Price'
      ),
      _react2.default.createElement(
        HeaderTag,
        { theme: theme },
        'Sub-Total'
      )
    ),
    data.items.map(function (x) {
      return _react2.default.createElement(
        RowTag,
        { theme: theme, key: x.id },
        _react2.default.createElement(
          DataTag,
          { theme: theme },
          x.name
        ),
        _react2.default.createElement(
          DataTag,
          { theme: theme },
          x.sku
        ),
        _react2.default.createElement(
          DataTag,
          { theme: theme, right: true },
          x.qty
        ),
        _react2.default.createElement(
          DataTag,
          { theme: theme, right: true },
          x.itemPrice
        ),
        _react2.default.createElement(
          DataTag,
          { theme: theme, right: true },
          x.subTotal
        )
      );
    }),
    _react2.default.createElement(
      RowTag,
      null,
      _react2.default.createElement(DataTag, { theme: theme, noBorder: true }),
      _react2.default.createElement(DataTag, { theme: theme, noBorder: true }),
      _react2.default.createElement(DataTag, { theme: theme, noBorder: true }),
      _react2.default.createElement(
        DataTag,
        { theme: theme, right: true, bold: true },
        'Sub-Total'
      ),
      _react2.default.createElement(
        DataTag,
        { theme: theme, right: true, bold: true },
        data.grandTotal
      )
    )
  );
}

LineItems.propTypes = {
  theme: _propTypes2.default.shape(),
  data: _propTypes2.default.shape({
    grandTotal: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.string.isRequired,
      name: _propTypes2.default.string.isRequired,
      sku: _propTypes2.default.string.isRequired,
      qty: _propTypes2.default.string.isRequired,
      itemPrice: _propTypes2.default.string.isRequired,
      subTotal: _propTypes2.default.string.isRequired
    })).isRequired
  }).isRequired

};

LineItems.defaultProps = {
  theme: _kratedTheme2.default
};

exports.default = LineItems;