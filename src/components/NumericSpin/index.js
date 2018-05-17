import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kratedTheme from 'krated-theme';
import Shevy from 'shevyjs';

import { shevyConfig } from '../helpers';

const shevy = new Shevy(shevyConfig);
const {
  content,
} = shevy;
const NumericSpinContainer = styled.div`
  position: relative;
  width: 170px;
`;

const InputContainer = styled.input`
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid transparent;
  outline: none;
  padding: 10px 45px;
  ${props => `
    font-family: ${props.theme.font.family};
    background-color: ${props.theme.colors.grey['-1']};
    color: ${props.theme.colors.grey[2]};
    border-radius: ${props.theme.borders.radius}px;
    font-weight: ${props.theme.font.weight.standard};
    line-height: ${content.lineHeight};
    font-size: ${content.fontSize};
    &:focus {
      border-color: ${props.theme.colors.grey[1]};
    };
  `};
`;

const FidlerContainer = styled.div`
  position: absolute;
  width: 45px;
  top: 0px;
  text-align: center;
  cursor: pointer;
  height: 100%;
  line-height: 48px;
  font-size: 28px;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.ocean['0']}
  }
`;

const Fiddle = FidlerContainer.withComponent('div');
const Decrease = Fiddle.extend`
  left: 0px;
  border-radius: 4px 0px 0px 4px;
  &:after {
    content: '-';
  }
`;

const Increase = Fiddle.extend`
  right: 0px;
  border-radius: 0px 4px 4px 0px;
  &:after {
    content: '+';
  }
`;


function NumericSpin({
  theme,
  handleClickChange,
  handleTypingChange,
  value,
  id,
}) {
  return (
    <NumericSpinContainer>
      <Decrease theme={theme} onClick={() => handleClickChange({ id, value: () => value - 1 })} />
      <InputContainer
        theme={theme}
        value={value}
        onChange={handleTypingChange}
        id={id}
        name={`numericSpin_${id}`}
    />
      <Increase theme={theme} onClick={() => handleClickChange({ id, value: () => value + 1 })} />
    </NumericSpinContainer>
  );
}

NumericSpin.propTypes = {
  theme: PropTypes.shape(),
  id: PropTypes.string.isRequired,
  handleClickChange: PropTypes.func.isRequired,
  handleTypingChange: PropTypes.func.isRequired,
  value: PropTypes.number,
};

NumericSpin.defaultProps = {
  theme: kratedTheme,
  value: 0,
};

export default NumericSpin;
