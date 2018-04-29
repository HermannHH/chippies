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
  text-rendering: optimizeLegibility;
  font-smoothing: antialiased;
  ${props => `
    color: ${props.theme.colors[props.color][props.shade]};
    font-family: ${props.theme.font.family};
    margin: ${props.withMargin ? `${content.marginBottom} 0px` : '0px'};
    font-weight: ${props.theme.font.weight.standard};
  `};
`;

function Paragraph({ theme, children, color, shade, withMargin }) {
  return <PTag color={color} shade={shade} theme={theme} withMargin={withMargin}>{children}</PTag>;
}

Paragraph.propTypes = {
  theme: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  shade: PropTypes.number,
  withMargin: PropTypes.bool,
};

Paragraph.defaultProps = {
  color: 'grey',
  shade: 2,
  withMargin: true,
};

export default withTheme(Paragraph);
