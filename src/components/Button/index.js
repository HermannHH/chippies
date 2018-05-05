import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import requiredIf from 'react-required-if';
import Ink from 'react-ink';
import kratedTheme from 'krated-theme';

import Label from '../Label';
import Pad from '../Pad';

const ButtonWrapper = styled.button`
  position: relative;
${props => `
    border-radius: ${props.theme.borders.radius}px;
    outline: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
    display: inline-block;
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.weight.standard};
    ${props.upcase && 'text-transform: uppercase'};
    text-decoration: none;
    user-select: none;
    ${props.fluid && 'width: 100%'};
    ${props.raised && `
      background-color: ${props.theme.colors[props.color][props.shade]};
      box-shadow: ${props.theme.box.shadow.shallow};
    `};
    &:disabled {
      background-color: ${props.theme.colors.grey['-1']};
      border: ${`thin solid ${props.theme.colors.grey['-1']}`};
      box-shadow: none;
      cursor: not-allowed;
    }
  `}
`;

function Button({
  theme,
  handleClick,
  loadingText,
  isLoading,
  disabled,
  type,
  text,
  fluid,
  raised,
  color,
  shade,
  whiteText,
  upcase,
}) {
  let labelColor = 'blue';
  let labelShade = '0';
  if (disabled || isLoading) {
    labelColor = 'grey';
    labelShade = '0';
  } else if (whiteText) {
    labelColor = 'white';
    labelShade = '0';
  }
  return (
    <ButtonWrapper
      theme={theme}
      onClick={handleClick}
      disabled={isLoading || disabled}
      type={type}
      fluid={fluid}
      raised={raised}
      color={color}
      shade={shade}
      upcase={upcase}
    >
      <Pad vertical={{ xs: 2 }} horizontal={{ xs: 4 }}>
        {!disabled &&
          <Ink />
        }
        <Label text={isLoading ? loadingText : text} color={labelColor} shade={labelShade} />
      </Pad>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  theme: PropTypes.shape(),
  upcase: PropTypes.bool,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleClick: requiredIf(PropTypes.func, props => props.type !== 'submit'),
  loadingText: PropTypes.string,
  isLoading: PropTypes.bool,
  type: PropTypes.oneOf([
    'submit',
    'button',
  ]),
  fluid: PropTypes.bool,
  raised: PropTypes.bool,
  color: PropTypes.string,
  shade: PropTypes.string,
  whiteText: PropTypes.bool,
};

Button.defaultProps = {
  theme: kratedTheme,
  handleClick: undefined,
  disabled: false,
  loadingText: 'Saving',
  isLoading: false,
  type: 'button',
  fluid: false,
  raised: false,
  color: 'blue',
  shade: '0',
  whiteText: false,
  upcase: true,
};

export default Button;
