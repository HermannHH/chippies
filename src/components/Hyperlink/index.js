import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shevy from 'shevyjs';
import kratedTheme from 'krated-theme';
import requiredIf from 'react-required-if';

import { shevyConfig } from '../helpers';
import Icon from '../Icon';
import Pad from '../Pad';

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
    color: ${props.theme.colors[props.color]['0']};
    font-weight: ${props.theme.font.weight.standard};
    font-family: ${props.theme.font.family};

    &:hover {
      cursor: pointer;
      color: ${props.theme.colors[props.hoverColor][props.hoverShade]};
      > div {
        > svg {
          > path {
            fill: ${props.theme.colors[props.hoverColor][props.hoverShade]};
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


function Hyperlink({
  theme,
  text,
  href,
  handleClick,
  icon,
  iconPosition,
  buttonPad,
  color,
  hoverColor,
  hoverShade,
}) {
  const anchor = (
    <AnchorTag
      onClick={handleClick}
      href={href}
      theme={theme}
      buttonPad={buttonPad}
      color={color}
      hoverColor={hoverColor}
      hoverShade={hoverShade}
    >
      {icon && iconPosition === 'left' &&
        <IconContainer iconPosition={iconPosition}>
          <Icon
            icon={icon}
            size="sm"
            color={color}
          />
        </IconContainer>
      }
      {text}
      {icon && iconPosition === 'right' &&
        <IconContainer iconPosition={iconPosition}>
          <Icon
            icon={icon}
            size="sm"
            color={color}
          />
        </IconContainer>
      }
    </AnchorTag>
  );

  let body = anchor;
  if (buttonPad) {
    body = (
      <Pad vertical={{ xs: 2 }} horizontal={{ xs: 4 }}>
        {anchor}
      </Pad>
    );
  }
  return body;
}

Hyperlink.propTypes = {
  theme: PropTypes.shape(),
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  handleClick: requiredIf(PropTypes.func, props => !props.href),
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  buttonPad: PropTypes.bool,
  color: PropTypes.oneOf(['blue', 'grey']),
  hoverColor: PropTypes.oneOf(['blue', 'grey', 'red']),
  hoverShade: PropTypes.string,
};

Hyperlink.defaultProps = {
  theme: kratedTheme,
  href: undefined,
  handleClick: undefined,
  icon: undefined,
  iconPosition: 'left',
  buttonPad: false,
  color: 'blue',
  hoverColor: 'grey',
  hoverShade: '2',
};

export default Hyperlink;
