import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Shevy from 'shevyjs';

const shevy = new Shevy();
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
    font-weight: ${props.theme.font.weight.bold};
    font-family: ${props.theme.font.family};
  `};
`;

function Label({ theme, text, color, shade }) {
  return (
    <LabelTag color={color} shade={shade} theme={theme}>{text}</LabelTag>
  );
}

Label.propTypes = {
  theme: PropTypes.shape().isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  shade: PropTypes.number,
};

Label.defaultProps = {
  color: 'black',
  shade: 0,
};

export default withTheme(Label);
