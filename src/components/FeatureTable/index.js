import React from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';
import kratedTheme from 'krated-theme';

import Heading from '../Heading';
import Icon from '../Icon';
import Label from '../Label';
import Paragraph from '../Paragraph';
import viewPort from '../viewPort';

const propTypes = {
  theme: PropTypes.shape({}),
  cells: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.oneOf(['heading', 'text', 'coming', 'included', 'excluded']).isRequired,
    color: PropTypes.oneOf(['white']),
    blueBackground: PropTypes.bool,
    hasBorder: PropTypes.bool,
  })).isRequired,
};
const defaultProps = {
  theme: kratedTheme,
};

function FeatureTable({ theme, cells }) {
  function cell(key, content, styles) {
    return (
      <FlexView key={key} vAlignContent="center" hAlignContent="center" width="25%" style={styles}>
        {content}
      </FlexView>
    );
  }
  return (
    <FlexView wrap>
      {cells.map((x, i) => {
        let content;
        const styles = {
          backgroundColor: x.blueBackground ? theme.colors.blue['0'] : theme.colors.white['0'],
          borderBottom: x.hasBorder && 'thin solid',
          borderColor: x.hasBorder && theme.colors.grey['-1'],
        };
        if (x.type === 'heading') {
          content = <Heading text={x.text} size="6" color={x.color || 'black'} />;
        } else if (x.type === 'coming') {
          content = (
            <Label
              text="Coming soon"
              backgroundColor="grey"
              backgroundShade="-1"
              color="white"
              shade="0"
            />
          );
        } else if (x.type === 'included') {
          content = <Icon icon="faCheckCircle" color="blue" />;
        } else if (x.type === 'text') {
          content = <Paragraph>{x.text}</Paragraph>;
        }
        return cell(i, content, styles);
      })}
    </FlexView>
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

export default viewPort(FeatureTable);
