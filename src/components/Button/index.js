import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import requiredIf from 'react-required-if';
import Ink from 'react-ink';

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
    text-transform: uppercase;
    text-decoration: none;
    user-select: none;
    ${props.fill && 'width: 100%'};
    ${props.raised && `box-shadow: ${props.theme.box.shadow.shallow}`};
  `}
`;

function Button({
  theme,
  handleClick,
  loadingText,
  disabled,
  type,
  text,
  fill,
  raised,
}) {
  return (
    <ButtonWrapper
      theme={theme}
      onClick={handleClick}
      disabled={(loadingText || disabled)}
      type={type}
      fill={fill}
      raised={raised}
    >
      <Pad vertical={{ xs: 2 }} horizontal={{ xs: 4 }}>
        {!disabled &&
          <Ink />
        }
        <Label text={loadingText || text} />
      </Pad>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  theme: PropTypes.shape().isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleClick: requiredIf(PropTypes.func, props => props.type !== 'submit'),
  loadingText: PropTypes.string,
  type: PropTypes.oneOf([
    'submit',
    'button',
  ]),
  fill: PropTypes.bool,
  raised: PropTypes.bool,
};

Button.defaultProps = {
  handleClick: undefined,
  disabled: false,
  loadingText: undefined,
  type: 'button',
  fill: false,
  raised: false,
};

export default withTheme(Button);