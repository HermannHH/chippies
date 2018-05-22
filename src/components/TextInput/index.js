import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shevy from 'shevyjs';
import kratedTheme from 'krated-theme';

import { shevyConfig } from '../helpers';

import Label from '../Label';
import InputErrors from '../InputErrors';

const shevy = new Shevy(shevyConfig);
const {
  content,
  baseSpacing: bs,
} = shevy;

const LabelContainer = styled.div`
    padding-left: ${bs(0.25)};
    margin: ${bs(0.25)} 0;
`;

const InputErrorsContainer = styled.div`
    margin: ${bs(0.25)} 0;
`;

const InputTag = styled.input`
  box-sizing: border-box;
  border: 2px solid transparent;
  outline: none;
  text-overflow: ellipses;
  display: block;
  width: 100%;
  resize: none;
  ${props => `
    background-color: ${props.theme.colors.grey['-1']};
    border-radius: ${props.theme.borders.radius}px;
    font-size: ${content.fontSize};
    color: ${props.theme.colors.grey[2]};
    line-height: ${content.lineHeight};
    font-family: ${props.theme.font.family};
    font-weight: ${props.theme.font.weight.standard};
    padding: ${bs(0.333)};
    &::placeholder{
      color: ${props.theme.colors.grey[1]};
    };
    &:focus {
      border-color: ${props.theme.colors.grey[1]};
      ${props.hasError && `border-color: ${props.theme.colors.red[0]}`};
    }
    ${props.hasError && `border-color: ${props.theme.colors.red[0]}`};
    ${props.hardText && 'padding-right: 90px'};
  `};
`;


function TextInput({
  theme,
  placeholder,
  value,
  errors,
  handleChange,
  handleFocus,
  handleBlur,
  label,
  type,
  id,
  tabIndex,
}) {
  const hasError = errors.length > 0;
  const labelColor = hasError ? 'red' : 'grey';
  const labelShade = hasError ? '0' : '1';
  return (
    <div>
      { label &&
      <LabelContainer>
        <Label text={label} color={labelColor} shade={labelShade} />
      </LabelContainer>
    }
      <InputTag
        placeholder={placeholder}
        theme={theme}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        hasError={hasError}
        autoComplete="off"
        type={type}
        id={id}
        name={id}
        tabIndex={tabIndex}
      />
      { hasError &&
        <InputErrorsContainer>
          <InputErrors errors={errors} />
        </InputErrorsContainer>
        }
    </div>
  );
}

TextInput.propTypes = {
  theme: PropTypes.shape(),
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
  ]),
  id: PropTypes.string.isRequired,
  tabIndex: PropTypes.string,
};

TextInput.defaultProps = {
  theme: kratedTheme,
  placeholder: undefined,
  handleFocus: undefined,
  handleBlur: undefined,
  label: undefined,
  errors: [],
  type: 'text',
  tabIndex: undefined,
};

export default TextInput;