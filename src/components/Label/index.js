import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shevy from 'shevyjs';
import kratedTheme from 'krated-theme';

import { shevyConfig } from '../helpers';

const shevy = new Shevy(shevyConfig);
const {
  content,
  baseSpacing: bs,
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
    ${(props.backgroundColor && props.backgroundShade) && `
      background-color: ${props.theme.colors[props.backgroundColor][props.backgroundShade]};
      border-radius: ${props.theme.borders.radius}px;
      padding: ${bs(0.2)} ${bs(0.4)};
    `}
  `};
`;

function Label({ theme, text, color, shade, backgroundColor, backgroundShade }) {
  return (
    <LabelTag
      color={color}
      shade={shade}
      theme={theme}
      backgroundColor={backgroundColor}
      backgroundShade={backgroundShade}
    >
      {text}
    </LabelTag>
  );
}

Label.propTypes = {
  theme: PropTypes.shape(),
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  shade: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundShade: PropTypes.string,
};

Label.defaultProps = {
  theme: kratedTheme,
  color: 'grey',
  shade: '2',
  backgroundColor: undefined,
  backgroundShade: undefined,
};

export default Label;
