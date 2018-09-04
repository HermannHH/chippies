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

var _kratedTheme = require('krated-theme');

var _kratedTheme2 = _interopRequireDefault(_kratedTheme);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _Paragraph = require('../Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _viewPort = require('../viewPort');

var _viewPort2 = _interopRequireDefault(_viewPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  theme: _propTypes2.default.shape({}),
  cells: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    text: _propTypes2.default.string,
    type: _propTypes2.default.oneOf(['heading', 'text', 'coming', 'included', 'excluded']).isRequired,
    color: _propTypes2.default.oneOf(['white']),
    blueBackground: _propTypes2.default.bool,
    hasBorder: _propTypes2.default.bool
  })).isRequired
};
var defaultProps = {
  theme: _kratedTheme2.default
};

function FeatureTable(_ref) {
  var theme = _ref.theme,
      cells = _ref.cells;

  function cell(key, content, styles) {
    return _react2.default.createElement(
      _reactFlexview2.default,
      { key: key, vAlignContent: 'center', hAlignContent: 'center', width: '25%', style: styles },
      content
    );
  }
  return _react2.default.createElement(
    _reactFlexview2.default,
    { wrap: true },
    cells.map(function (x, i) {
      var content = void 0;
      var styles = {
        backgroundColor: x.blueBackground ? theme.colors.blue['0'] : theme.colors.white['0'],
        borderBottom: x.hasBorder && 'thin solid',
        borderColor: x.hasBorder && theme.colors.grey['-1']
      };
      if (x.type === 'heading') {
        content = _react2.default.createElement(_Heading2.default, { text: x.text, size: '6', color: x.color || 'black' });
      } else if (x.type === 'coming') {
        content = _react2.default.createElement(_Label2.default, {
          text: 'Coming soon',
          backgroundColor: 'grey',
          backgroundShade: '-1',
          color: 'white',
          shade: '0'
        });
      } else if (x.type === 'included') {
        content = _react2.default.createElement(_Icon2.default, { icon: 'faCheckCircle', color: 'blue' });
      } else if (x.type === 'text') {
        content = _react2.default.createElement(
          _Paragraph2.default,
          null,
          x.text
        );
      }
      return cell(i, content, styles);
    })
  );
}

// {cell()}
//       {cell(<Heading text="Pupper" size="6" />)}
//       {cell(<Heading text="Beagle" size="6" />)}
//       {cell(<Heading text="Rottweiler" size="6" />)}
//       {cell(<Heading text="General" size="6" color="white" />, {
//         backgroundColor: theme.colors.blue['0'],
//       })}
//       {cell(undefined, {
//         backgroundColor: theme.colors.blue['0'],
//       })}
//       {cell(undefined, {
//         backgroundColor: theme.colors.blue['0'],
//       })}
//       {cell(undefined, {
//         backgroundColor: theme.colors.blue['0'],
//       })}
//       {/* Access */}
//       {cell(<Heading text="Access" size="6" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {cell(<Icon icon="faCheckCircle" color="blue" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {cell(
//         <Label
//           text="Coming soon"
//           backgroundColor="grey"
//           backgroundShade="-1"
//           color="white"
//           shade="0"
//         />,
//         {
//           borderBottom: 'thin solid',
//           borderColor: theme.colors.grey['-1'],
//         },
//       )}
//       {cell(
//         <Label
//           text="Coming soon"
//           backgroundColor="grey"
//           backgroundShade="-1"
//           color="white"
//           shade="0"
//         />,
//         {
//           borderBottom: 'thin solid',
//           borderColor: theme.colors.grey['-1'],
//         },
//       )}
//       {/* Access */}
//       {cell(<Heading text="Access" size="6" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {cell(<Icon icon="faCheckCircle" color="blue" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {cell(
//         <Label
//           text="Coming soon"
//           backgroundColor="grey"
//           backgroundShade="-1"
//           color="white"
//           shade="0"
//         />,
//         {
//           borderBottom: 'thin solid',
//           borderColor: theme.colors.grey['-1'],
//         },
//       )}
//       {cell(
//         <Label
//           text="Coming soon"
//           backgroundColor="grey"
//           backgroundShade="-1"
//           color="white"
//           shade="0"
//         />,
//         {
//           borderBottom: 'thin solid',
//           borderColor: theme.colors.grey['-1'],
//         },
//       )}
//       {cell(<Heading text="General" size="6" color="white" />, {
//         backgroundColor: theme.colors.blue['0'],
//       })}
//       {cell(undefined, {
//         backgroundColor: theme.colors.blue['0'],
//       })}
//       {cell(undefined, {
//         backgroundColor: theme.colors.blue['0'],
//       })}
//       {cell(undefined, {
//         backgroundColor: theme.colors.blue['0'],
//       })}
//       {/* Access */}
//       {cell(<Heading text="Access" size="6" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {cell(<Icon icon="faCheckCircle" color="blue" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {cell(<Icon icon="faCheckCircle" color="blue" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {cell(<Icon icon="faCheckCircle" color="blue" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {/* Access */}
//       {cell(<Heading text="Access" size="6" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {cell(<Icon icon="faCheckCircle" color="blue" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {cell(<Icon icon="faCheckCircle" color="blue" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}
//       {cell(<Icon icon="faCheckCircle" color="blue" />, {
//         borderBottom: 'thin solid',
//         borderColor: theme.colors.grey['-1'],
//       })}

FeatureTable.propTypes = propTypes;
FeatureTable.defaultProps = defaultProps;

exports.default = (0, _viewPort2.default)(FeatureTable);

//# sourceMappingURL=index.js.map