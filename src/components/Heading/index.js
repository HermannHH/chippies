import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shevy from 'shevyjs';
import kratedTheme from 'krated-theme';

import { shevyConfig } from '../helpers';

const shevy = new Shevy(shevyConfig);
const {
  h1, h2, h3, h4, h5, h6,
} = shevy;

const HTag = styled.h1`
  font-size: ${h1.fontSize};
  line-height: ${h1.lineHeight};
  text-rendering: optimizeLegibility;
  font-smoothing: antialiased;
  ${props => `
    color: ${props.theme.colors[props.color][props.shade]};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.weight.bold};
    margin: ${props.withMargin ? `${h1.marginBottom} 0px` : '0px'};
  `};
`;

const H2 = HTag.withComponent('h2');
const HTagTwo = H2.extend`
  font-size: ${h2.fontSize};
  line-height: ${h2.lineHeight};
  ${props => `
    margin: ${props.withMargin ? `${h2.marginBottom} 0px` : '0px'};
  `};
`;

const H3 = HTag.withComponent('h3');
const HTagThree = H3.extend`
  font-size: ${h3.fontSize};
  line-height: ${h3.lineHeight};
  ${props => `
    margin: ${props.withMargin ? `${h3.marginBottom} 0px` : '0px'};
  `};
`;

const H4 = HTag.withComponent('h4');
const HTagFour = H4.extend`
  font-size: ${h4.fontSize};
  line-height: ${h4.lineHeight};
  ${props => `
    margin: ${props.withMargin ? `${h4.marginBottom} 0px` : '0px'};
  `};
`;

const H5 = HTag.withComponent('h5');
const HTagFive = H5.extend`
  font-size: ${h5.fontSize};
  line-height: ${h5.lineHeight};
  ${props => `
    margin: ${props.withMargin ? `${h5.marginBottom} 0px` : '0px'};
  `};
`;

const H6 = HTag.withComponent('h6');
const HTagSix = H6.extend`
  font-size: ${h6.fontSize};
  line-height: ${h6.lineHeight};
  ${props => `
    margin: ${props.withMargin ? `${h6.marginBottom} 0px` : '0px'};
  `};
`;

function Heading({ theme, size, text, color, shade, withMargin }) {
  switch (size) {
    case '2':
      return <HTagTwo color={color} shade={shade} theme={theme} withMargin={withMargin}>{text}</HTagTwo>;
    case '3':
      return <HTagThree color={color} shade={shade} theme={theme} withMargin={withMargin}>{text}</HTagThree>;
    case '4':
      return <HTagFour color={color} shade={shade} theme={theme} withMargin={withMargin}>{text}</HTagFour>;
    case '5':
      return <HTagFive color={color} shade={shade} theme={theme} withMargin={withMargin}>{text}</HTagFive>;
    case '6':
      return <HTagSix color={color} shade={shade} theme={theme} withMargin={withMargin}>{text}</HTagSix>;
    default:
      return <HTag color={color} shade={shade} theme={theme} withMargin={withMargin}>{text}</HTag>;
  }
}

Heading.propTypes = {
  theme: PropTypes.shape(),
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  color: PropTypes.string,
  shade: PropTypes.number,
  withMargin: PropTypes.bool,
};

Heading.defaultProps = {
  theme: kratedTheme,
  size: '1',
  color: 'black',
  shade: '0',
  withMargin: true,
};

export default Heading;
