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
const { content } = shevy;

const PTag = styled.p`
  font-size: ${content.fontSize};
  line-height: ${content.lineHeight};
  margin-bottom: ${content.marginBottom};
  text-rendering: optimizeLegibility;
  font-smoothing: antialiased;
  ${props => `
    font-family: ${props.theme.font.family};
  `};
`;

function Paragraph({ theme, children }) {
  return <PTag theme={theme}>{children}</PTag>;
}

Paragraph.propTypes = {
  theme: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
};

export default withTheme(Paragraph);
