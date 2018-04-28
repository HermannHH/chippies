import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Shevy from 'shevyjs';

import { shevyConfig } from '../../helpers';

const shevy = new Shevy(shevyConfig);
const { content } = shevy;

const PTag = styled.p`
  font-size: ${content.fontSize};
  line-height: ${content.lineHeight};
  margin-bottom: ${content.marginBottom};
  text-rendering: optimizeLegibility;
  font-smoothing: antialiased;
  ${props => `
    color: ${props.theme.colors[props.color][props.shade]};
    font-family: ${props.theme.font.family};
  `};
`;

function Paragraph({ theme, children, color, shade }) {
  return <PTag color={color} shade={shade} theme={theme}>{children}</PTag>;
}

Paragraph.propTypes = {
  theme: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  shade: PropTypes.number,
};

Paragraph.defaultProps = {
  color: 'grey',
  shade: 2,
};

export default withTheme(Paragraph);
