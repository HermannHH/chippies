import React from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';
import kratedTheme from 'krated-theme';

import Heading from '../Heading';
import Icon from '../Icon';
import Label from '../Label';
import viewPort from '../viewPort';

const propTypes = {
  theme: PropTypes.shape({}),
};
const defaultProps = {
  theme: kratedTheme,
};

function FeatureTable({ theme }) {
  function cell(content, styles) {
    return (
      <FlexView vAlignContent="center" hAlignContent="center" width="25%" style={styles}>
        {content}
      </FlexView>
    );
  }
  return (
    <FlexView wrap>
      {cell()}
      {cell(<Heading text="Pupper" size="6" />)}
      {cell(<Heading text="Doggo" size="6" />)}
      {cell(<Heading text="Woofer" size="6" />)}
      {cell(<Heading text="General" size="6" color="white" />, {
        backgroundColor: theme.colors.blue['0'],
      })}
      {cell(undefined, {
        backgroundColor: theme.colors.blue['0'],
      })}
      {cell(undefined, {
        backgroundColor: theme.colors.blue['0'],
      })}
      {cell(undefined, {
        backgroundColor: theme.colors.blue['0'],
      })}
      {/* Access */}
      {cell(<Heading text="Access" size="6" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Icon icon="faCheckCircle" color="blue" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Label
      text="Coming soon"
      backgroundColor="green"
      backgroundShade="0"
      color="white"
      shade="0" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Label
      text="Coming soon"
      backgroundColor="green"
      backgroundShade="0"
      color="white"
      shade="0" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {/* Access */}
      {cell(<Heading text="Access" size="6" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Icon icon="faCheckCircle" color="blue" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Icon icon="faCheckCircle" color="blue" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Icon icon="faCheckCircle" color="blue" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Heading text="General" size="6" color="white" />, {
        backgroundColor: theme.colors.blue['0'],
      })}
      {cell(undefined, {
        backgroundColor: theme.colors.blue['0'],
      })}
      {cell(undefined, {
        backgroundColor: theme.colors.blue['0'],
      })}
      {cell(undefined, {
        backgroundColor: theme.colors.blue['0'],
      })}
      {/* Access */}
      {cell(<Heading text="Access" size="6" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Icon icon="faCheckCircle" color="blue" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Icon icon="faCheckCircle" color="blue" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Icon icon="faCheckCircle" color="blue" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {/* Access */}
      {cell(<Heading text="Access" size="6" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Icon icon="faCheckCircle" color="blue" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Icon icon="faCheckCircle" color="blue" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
      {cell(<Icon icon="faCheckCircle" color="blue" />, {
        borderBottom: 'thin solid',
        borderColor: theme.colors.grey['-1'],
      })}
    </FlexView>
  );
}

FeatureTable.propTypes = propTypes;
FeatureTable.defaultProps = defaultProps;

export default viewPort(FeatureTable);
