import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shevy from 'shevyjs';
import kratedTheme from 'krated-theme';
import requiredIf from 'react-required-if';

import { shevyConfig } from '../helpers';

const shevy = new Shevy(shevyConfig);
const {
  content,
} = shevy;

const AnchorTag = styled.a`
  font-size: ${content.fontSize};
  line-height: ${content.lineHeight};
  text-rendering: optimizeLegibility;
  font-smoothing: antialiased;
  ${props => `
    color: ${props.theme.colors.blue['0']};
    font-weight: ${props.theme.font.weight.standard};
    font-family: ${props.theme.font.family};

    &:hover {
      cursor: pointer;
      color: ${props.theme.colors.grey['2']};
    };
  `};
`;

function Hyperlink({ theme, text, href, handleClick }) {
  return (
    <AnchorTag onClick={handleClick} href={href} theme={theme}>{text}</AnchorTag>
  );
}

Hyperlink.propTypes = {
  theme: PropTypes.shape(),
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  handleClick: requiredIf(PropTypes.func, props => !props.href),
};

Hyperlink.defaultProps = {
  theme: kratedTheme,
  href: undefined,
  handleClick: undefined,
};

export default Hyperlink;
