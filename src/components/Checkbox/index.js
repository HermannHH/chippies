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
    display: block;
    position: relative;
    padding-left: ${props => (props.labelPosition === 'left' ? '0px' : '35px')};
    cursor: pointer;
    user-select: none;
    font-size: ${content.fontSize};
    line-height: ${content.lineHeight};
    text-rendering: optimizeLegibility;
    font-smoothing: antialiased;
    margin-bottom: 0px;
    ${props => `
      color: ${props.theme.colors.grey['2']};
      font-weight: ${props.theme.font.weight.standard};
      font-family: ${props.theme.font.family};
    `};

    > input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    };

    > span {
        position: absolute;
        top: 2px;
        left:  ${props => (props.labelPosition === 'right' && '0px')};
        ${props => (props.labelPosition === 'left' && `
          float: right;
          margin-left: 10px;
          top: 4px;
        `)};
        height: 25px;
        width: 25px;
        border-radius: ${props => props.theme.borders.radius}px;
        background-color: ${props => props.theme.colors.grey['-1']};

        &:after {
            content: "";
            position: absolute;
            display: none;
        }
    };

    &:hover {
        > input ~ span {
            background-color: ${props => props.theme.colors.grey['0']};
        };
    };

    > input:checked ~ span {
        background-color: ${props => props.theme.colors.blue['0']};
    };
    
      > input:checked ~ span:after {
        display: block;
      };

    > span:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid ${props => props.theme.colors.white['0']};
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    };
`;

/**
 * Styled wrapper for html's checkbox
 */

function Checkbox({
  theme,
  isChecked,
  handleChange,
  labelPosition,
  label,
}) {
  return (
    <LabelTag onClick={handleChange} theme={theme} labelPosition={labelPosition}>
      { label }
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span />
    </LabelTag>
  );
}

Checkbox.propTypes = {
  theme: PropTypes.shape(),
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  labelPosition: PropTypes.oneOf([
    'left',
    'right',
  ]),
};

Checkbox.defaultProps = {
  labelPosition: 'left',
  theme: kratedTheme,
};

export default Checkbox;
