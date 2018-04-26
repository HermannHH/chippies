import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Shevy from 'shevyjs';

const defaultOptions = {
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  baseFontScale: [3, 2.5, 2, 1.5, 1.25, 1],
  addMarginBottom: true,
  proximity: false,
  proximityFactor: 0.85,
};

const shevy = new Shevy(defaultOptions);
const {
  baseSpacing: bs, h1, h2, h3, h4, h5, h6,
} = shevy;

const HTag = styled.h1`
  font-size: ${h1.fontSize};
  line-height: ${h1.lineHeight};
  margin-bottom: ${h1.marginBottom};
  text-rendering: optimizeLegibility;
  font-smoothing: antialiased;
  ${props => `
    font-family: ${props.theme.font.family};
  `};
`;

const H2 = HTag.withComponent('h2');
const HTagTwo = H2.extend`
  font-size: ${h2.fontSize};
  line-height: ${h2.lineHeight};
  margin-bottom: ${h2.marginBottom};
`;

const H3 = HTag.withComponent('h3');
const HTagThree = H3.extend`
  font-size: ${h3.fontSize};
  line-height: ${h3.lineHeight};
  margin-bottom: ${h3.marginBottom};
`;

const H4 = HTag.withComponent('h4');
const HTagFour = H4.extend`
  font-size: ${h4.fontSize};
  line-height: ${h4.lineHeight};
  margin-bottom: ${h4.marginBottom};
`;

const H5 = HTag.withComponent('h5');
const HTagFive = H5.extend`
  font-size: ${h5.fontSize};
  line-height: ${h5.lineHeight};
  margin-bottom: ${h5.marginBottom};
`;

const H6 = HTag.withComponent('h6');
const HTagSix = H6.extend`
  font-size: ${h6.fontSize};
  line-height: ${h6.lineHeight};
  margin-bottom: ${h6.marginBottom};
`;

function Heading({ theme, size, text }) {
  switch (size) {
    case '2':
      return <HTagTwo theme={theme}>{text}</HTagTwo>;
    case '3':
      return <HTagThree theme={theme}>{text}</HTagThree>;
    case '4':
      return <HTagFour theme={theme}>{text}</HTagFour>;
    case '5':
      return <HTagFive theme={theme}>{text}</HTagFive>;
    case '6':
      return <HTagSix theme={theme}>{text}</HTagSix>;
    default:
      return <HTag theme={theme}>{text}</HTag>;
  }
}

Heading.propTypes = {
  theme: PropTypes.shape().isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
};

Heading.defaultProps = {
  size: '1',
};

export default withTheme(Heading);
