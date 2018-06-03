'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden;\n  ', ';\n'], ['\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0px;\n  margin-top: -33px;\n  padding: 20px;\n'], ['\n  margin: 0px;\n  margin-top: -33px;\n  padding: 20px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  \n'], ['\n  \n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n', '\n'], ['\n  position: relative;\n', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _reactInk = require('react-ink');

var _reactInk2 = _interopRequireDefault(_reactInk);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Pad = require('../Pad');

var _Pad2 = _interopRequireDefault(_Pad);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
  return '\n    border-radius: ' + props.theme.borders.radius + 'px;\n    border: ' + ('thin solid ' + props.theme.colors.grey['-1']) + ';\n  ';
});

var Pre = _styledComponents2.default.pre(_templateObject2);

var Code = _styledComponents2.default.code(_templateObject3);

var Copier = _styledComponents2.default.button(_templateObject4, function (props) {
  return '\n    border-radius: 0px 0px ' + props.theme.borders.radius + 'px ' + props.theme.borders.radius + 'px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    white-space: nowrap;\n    display: inline-block;\n    text-decoration: none;\n    user-select: none;\n    width: 100%;\n    background-color: ' + (props.copied ? 'inherit' : props.theme.colors.blue['0']) + ';\n    ' + (!props.copied && 'box-shadow: ' + props.theme.box.shadow.shallow) + ';\n    &:disabled {\n      background-color: \'inherit\';\n      border-top: ' + ('thin solid ' + props.theme.colors.grey['-1']) + ';\n      box-shadow: none;\n      cursor: not-allowed;\n    }\n  ';
});

function CodeSnippet(_ref) {
  var snippet = _ref.snippet,
      theme = _ref.theme,
      copied = _ref.copied,
      handleCopied = _ref.handleCopied;

  //   function escapeHtml(text) {
  //     const map = {
  //       '&': '&amp;',
  //       '<': '&lt;',
  //       '>': '&gt;',
  //       '"': '&quot;',
  //       "'": '&#039;',
  //     };
  //     return text.replace(/[&<>"']/g, m => map[m]);
  //   }

  return _react2.default.createElement(
    Container,
    { theme: theme },
    _react2.default.createElement(
      Pre,
      null,
      _react2.default.createElement(
        Code,
        null,
        _react2.default.createElement(
          _Paragraph2.default,
          { withMargin: false },
          snippet
        )
      )
    ),
    _react2.default.createElement(
      _reactCopyToClipboard2.default,
      {
        text: snippet,
        onCopy: handleCopied
      },
      _react2.default.createElement(
        Copier,
        { theme: theme, copied: copied, disabled: copied },
        _react2.default.createElement(
          _Pad2.default,
          { vertical: { xs: 2 }, horizontal: { xs: 4 } },
          !copied && _react2.default.createElement(_reactInk2.default, null),
          _react2.default.createElement(_Label2.default, { text: copied ? 'Copied to clipboard' : 'Copy to clipboard', color: copied ? 'blue' : 'white', shade: '0' })
        )
      )
    )
  );
}

CodeSnippet.propTypes = {
  theme: _propTypes2.default.shape(),
  snippet: _propTypes2.default.string.isRequired,
  copied: _propTypes2.default.bool,
  handleCopied: _propTypes2.default.func.isRequired
};

CodeSnippet.defaultProps = {
  theme: _kratedTheme2.default,
  copied: false
};

exports.default = CodeSnippet;