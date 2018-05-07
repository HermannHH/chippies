import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shevy from 'shevyjs';
import kratedTheme from 'krated-theme';
import requiredIf from 'react-required-if';

import { shevyConfig } from '../helpers';
import Icon from '../Icon';

const shevy = new Shevy(shevyConfig);
const {
  content,
  baseSpacing: bs,
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
      > div {
        > svg {
          > path {
            fill: ${props.theme.colors.grey['2']};
          }
        };
      };
    };
  `};
`;

const IconContainer = styled.div`
  display: inline-block;
  ${props => props.iconPosition === 'left' && `padding-right: ${bs(0.2)}`};
  ${props => props.iconPosition === 'right' && `padding-left: ${bs(0.2)}`};
`;


function Hyperlink({ theme, text, href, handleClick, icon, iconPosition }) {
  return (
    <AnchorTag onClick={handleClick} href={href} theme={theme}>
      {icon && iconPosition === 'left' &&
        <IconContainer iconPosition={iconPosition}>
          <Icon
            icon={icon}
            size="sm"
            color="blue"
          />
        </IconContainer>
      }
      {text}
      {icon && iconPosition === 'right' &&
        <IconContainer iconPosition={iconPosition}>
          <Icon
            icon={icon}
            size="sm"
            color="blue"
          />
        </IconContainer>
      }
    </AnchorTag>
  );
}

Hyperlink.propTypes = {
  theme: PropTypes.shape(),
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  handleClick: requiredIf(PropTypes.func, props => !props.href),
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

Hyperlink.defaultProps = {
  theme: kratedTheme,
  href: undefined,
  handleClick: undefined,
  icon: undefined,
  iconPosition: 'left',
};

export default Hyperlink;
