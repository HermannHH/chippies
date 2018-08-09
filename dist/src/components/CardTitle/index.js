'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  > * {\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n'], ['\n  width: 100%;\n  > * {\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _HeadingGroup = require('../HeadingGroup');

var _HeadingGroup2 = _interopRequireDefault(_HeadingGroup);

var _CardPad = require('../CardPad');

var _CardPad2 = _interopRequireDefault(_CardPad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import ReactPlaceholder from 'react-placeholder';

// import shevyConfig from '../shevyConfig';

// const shevy = new Shevy(shevyConfig);
// const {
//   h1, h2, h3, h4, h5, h6,
// } = shevy;

var CardTitleWrapper = _styledComponents2.default.div(_templateObject);

function CardTitle(_ref) {
  var text = _ref.text,
      theme = _ref.theme,
      subText = _ref.subText;

  return _react2.default.createElement(
    CardTitleWrapper,
    { theme: theme },
    _react2.default.createElement(
      _CardPad2.default,
      null,
      subText ? _react2.default.createElement(_HeadingGroup2.default, { mainText: text, subText: subText, withMargin: false, size: '5' }) : _react2.default.createElement(_Heading2.default, { text: text, size: '5', withMargin: false })
    )
  );
}

CardTitle.propTypes = {
  theme: _propTypes2.default.shape(),
  text: _propTypes2.default.string.isRequired,
  subText: _propTypes2.default.string
};

CardTitle.defaultProps = {
  theme: _kratedTheme2.default,
  subText: undefined
};

exports.default = CardTitle;

//# sourceMappingURL=index.js.map