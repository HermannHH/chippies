import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import requiredIf from 'react-required-if';
import Ink from 'react-ink';

const ButtonWrapper = styled.button`
  text-rendering: optimizeLegibility;
  font-smoothing: antialiased;
  position: relative;
${props => `
    outline: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0  ${props.theme.padding.small}px;
    box-shadow: ${props.theme.box.shadow.shallow};
    border-radius: ${props.theme.border.radius}px;
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.weight.standard};
    background-color: ${props.theme.color.brinkPink.standard};
    color: ${props.theme.color.white.standard};
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: .025em;
    text-decoration: none;
    min-width: 184px;
    user-select: none;
    ${props.fill && 'width: 100%'};
    &:disabled {
      background-color: ${props.theme.color.grey.lighten};
      border: ${`thin solid ${props.theme.color.grey.lighten}`};
      color: ${props.theme.color.grey.standard};
      box-shadow: none;
      cursor: not-allowed;
    }
  `}
`;

function Button({ theme, handleClick, loadingText, disabled, type, text, fill }) {
  return (
    <ButtonWrapper
      theme={theme}
      onClick={handleClick}
      disabled={(loadingText || disabled)}
      type={type}
      fill={fill}
    >
      {!disabled &&
        <Ink />
      }
      { loadingText || text }
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
};

Button.defaultProps = {
  handleClick: undefined,
  disabled: false,
  loadingText: undefined,
  type: 'button',
  fill: false,
};

export default withTheme(Button);