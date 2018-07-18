'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n  margin-bottom: 20px;\n'], ['\n  text-align: center;\n  margin-bottom: 20px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 80px;\n  height: 80px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 20px;\n'], ['\n  width: 80px;\n  height: 80px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 20px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardPad = require('../CardPad');

var _CardPad2 = _interopRequireDefault(_CardPad);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _HeadingGroup = require('../HeadingGroup');

var _HeadingGroup2 = _interopRequireDefault(_HeadingGroup);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  name: _propTypes2.default.string.isRequired,
  amount: _propTypes2.default.string.isRequired,
  entityVsTerm: _propTypes2.default.string.isRequired,
  explainer: _propTypes2.default.string.isRequired,
  buttonText: _propTypes2.default.string.isRequired,
  buttonAction: _propTypes2.default.func.isRequired,
  image: _propTypes2.default.element.isRequired
};
var defaultProps = {};

var CardInnerWrapper = _styledComponents2.default.div(_templateObject);

var ImageWrapper = _styledComponents2.default.div(_templateObject2);

function PlanSummaryCard(_ref) {
  var image = _ref.image,
      name = _ref.name,
      amount = _ref.amount,
      entityVsTerm = _ref.entityVsTerm,
      explainer = _ref.explainer,
      buttonText = _ref.buttonText,
      buttonAction = _ref.buttonAction;

  return _react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(
      _CardPad2.default,
      null,
      _react2.default.createElement(
        CardInnerWrapper,
        null,
        _react2.default.createElement(
          ImageWrapper,
          null,
          image
        ),
        _react2.default.createElement(_Heading2.default, { text: name, size: '4' }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_HeadingGroup2.default, { mainText: amount, subText: entityVsTerm, size: '4' }),
        _react2.default.createElement(
          _Paragraph2.default,
          null,
          explainer
        ),
        _react2.default.createElement(_Button2.default, { text: buttonText, handleClick: buttonAction, raised: true, whiteText: true, color: 'red' })
      )
    )
  );
}

PlanSummaryCard.propTypes = propTypes;
PlanSummaryCard.defaultProps = defaultProps;

exports.default = PlanSummaryCard;