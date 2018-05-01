import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shevy from 'shevyjs';
import kratedTheme from 'krated-theme';

import { shevyConfig } from '../helpers';

const shevy = new Shevy(shevyConfig);
const {
  content,
} = shevy;

const LabelTag = styled.label`
  font-size: ${content.fontSize};
  line-height: ${content.lineHeight};
  text-rendering: optimizeLegibility;
  font-smoothing: antialiased;
  ${props => `
    color: ${props.theme.colors[props.color][props.shade]};
    font-weight: ${props.theme.font.weight.semiBold};
    font-family: ${props.theme.font.family};
  `};
`;

function Label({ theme, text, color, shade }) {
  return (
    <LabelTag color={color} shade={shade} theme={theme}>{text}</LabelTag>
  );
}

Label.propTypes = {
  theme: PropTypes.shape(),
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  shade: PropTypes.string,
};

Label.defaultProps = {
  theme: kratedTheme,
  color: 'grey',
  shade: '2',
};

export default Label;
