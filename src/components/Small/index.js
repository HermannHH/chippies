import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Shevy from 'shevyjs';

import { shevyConfig } from '../helpers';

const shevy = new Shevy(shevyConfig);
const { content } = shevy;

const SmallTag = styled.small`
  font-size: ${content.fontSize - 4};
  line-height: ${content.lineHeight};
  margin-bottom: ${content.marginBottom};
  text-rendering: optimizeLegibility;
  font-smoothing: antialiased;
  ${props => `
    color: ${props.theme.colors[props.color][props.shade]};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.weight.standard};
  `};
`;

function Small({ theme, children, color, shade }) {
  return <SmallTag color={color} shade={shade} theme={theme}>{children}</SmallTag>;
}

Small.propTypes = {
  theme: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  shade: PropTypes.number,
};

Small.defaultProps = {
  color: 'grey',
  shade: 2,
};

export default withTheme(Small);
