'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  display: inline-block;\n  box-sizing: border-box;\n  padding-top: 18px;\n  margin: 0px 15px;\n'], ['\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  display: inline-block;\n  box-sizing: border-box;\n  padding-top: 18px;\n  margin: 0px 15px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 100%;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  display: inline-block;\n  box-sizing: border-box;\n  padding-top: 16px;\n  \n  > * {\n    display: inline;\n    margin: 0px 20px;\n  }\n'], ['\n  height: 100%;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  display: inline-block;\n  box-sizing: border-box;\n  padding-top: 16px;\n  \n  > * {\n    display: inline;\n    margin: 0px 20px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _SlideBar = require('../SlideBar');

var _SlideBar2 = _interopRequireDefault(_SlideBar);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _PoweredByKrated = require('../PoweredByKrated');

var _PoweredByKrated2 = _interopRequireDefault(_PoweredByKrated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import { Scrollbars } from 'react-custom-scrollbars';


var IconContainer = _styledComponents2.default.div(_templateObject);

var ActionsContainer = _styledComponents2.default.div(_templateObject2);

function QuoteSlideBar(_ref) {
  var show = _ref.show,
      numItems = _ref.numItems,
      handleClick = _ref.handleClick;

  return _react2.default.createElement(
    _SlideBar2.default,
    {
      show: show
    },
    _react2.default.createElement(
      IconContainer,
      null,
      _react2.default.createElement(_PoweredByKrated2.default, null)
    ),
    _react2.default.createElement(
      ActionsContainer,
      null,
      _react2.default.createElement(_Label2.default, { text: numItems + ' items added', color: 'white', shade: '0' }),
      _react2.default.createElement(_Button2.default, { text: 'Continue', handleClick: handleClick, raised: true, whiteText: true, color: 'red' })
    )
  );
}

QuoteSlideBar.propTypes = {
  show: _propTypes2.default.bool.isRequired,
  numItems: _propTypes2.default.number.isRequired,
  handleClick: _propTypes2.default.func.isRequired
};

exports.default = QuoteSlideBar;

//# sourceMappingURL=index.js.map