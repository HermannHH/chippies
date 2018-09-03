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

var _reactRequiredIf = require('react-required-if');

var _reactRequiredIf2 = _interopRequireDefault(_reactRequiredIf);

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

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _Mrg = require('../Mrg');

var _Mrg2 = _interopRequireDefault(_Mrg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
  name: _propTypes2.default.string.isRequired,
  amount: _propTypes2.default.string,
  entityVsTerm: _propTypes2.default.string,
  explainer: _propTypes2.default.string.isRequired,
  buttonText: (0, _reactRequiredIf2.default)(_propTypes2.default.string, function (props) {
    return props.amount && props.entityVsTerm;
  }),
  buttonAction: (0, _reactRequiredIf2.default)(_propTypes2.default.func, function (props) {
    return props.amount && props.entityVsTerm;
  }),
  waitingButtonText: (0, _reactRequiredIf2.default)(_propTypes2.default.string, function (props) {
    return !props.amount && !props.entityVsTerm;
  }),
  waitingButtonAction: (0, _reactRequiredIf2.default)(_propTypes2.default.func, function (props) {
    return !props.amount && !props.entityVsTerm;
  }),
  image: _propTypes2.default.element.isRequired
};
var defaultProps = {
  amount: null,
  entityVsTerm: null,
  waitingButtonAction: null,
  waitingButtonText: null,
  buttonAction: null,
  buttonText: null
};

var CardInnerWrapper = _styledComponents2.default.div(_templateObject);

var ImageWrapper = _styledComponents2.default.div(_templateObject2);

function PlanSummaryCard(_ref) {
  var image = _ref.image,
      name = _ref.name,
      amount = _ref.amount,
      entityVsTerm = _ref.entityVsTerm,
      explainer = _ref.explainer,
      buttonText = _ref.buttonText,
      buttonAction = _ref.buttonAction,
      waitingButtonText = _ref.waitingButtonText,
      waitingButtonAction = _ref.waitingButtonAction;

  var isActive = amount && entityVsTerm;
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
        isActive ? _react2.default.createElement(_HeadingGroup2.default, { mainText: amount, subText: entityVsTerm, size: '4' }) : _react2.default.createElement(
          _Mrg2.default,
          { top: { xs: 5 }, bottom: { xs: 5 } },
          _react2.default.createElement(_Label2.default, {
            text: 'Coming soon',
            backgroundColor: 'grey',
            backgroundShade: '-1',
            color: 'white',
            shade: '0'
          })
        ),
        _react2.default.createElement(
          _Paragraph2.default,
          null,
          explainer
        ),
        isActive ? _react2.default.createElement(_Button2.default, { text: buttonText, handleClick: buttonAction, raised: true, whiteText: true, color: 'red' }) : _react2.default.createElement(_Button2.default, { text: waitingButtonText, handleClick: waitingButtonAction })
      )
    )
  );
}

PlanSummaryCard.propTypes = propTypes;
PlanSummaryCard.defaultProps = defaultProps;

exports.default = PlanSummaryCard;