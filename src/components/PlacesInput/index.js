import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Shevy from 'shevyjs';
import kratedTheme from 'krated-theme';
import Geosuggest from 'react-geosuggest';

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

const InputContainerTag = styled.div`
  > .geosuggest {
      position: relative;
      z-index: 1;
    > .geosuggest__input-wrapper {
      > .geosuggest__input{
        z-index: 1;
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
      }
    }
    > .geosuggest__suggests-wrapper {
      z-index: 9;
      padding: 0 0.5%;
      position: absolute;
      width: 99%;
       >.geosuggest__suggests{
         ${props => `
           border-bottom-right-radius: ${props.theme.borders.radius}px;
           border-bottom-left-radius: ${props.theme.borders.radius}px;
           box-shadow: ${props.theme.box.shadow.medium};
           background-color: ${props.theme.colors.white['0']};
         `};
         list-style-type: none;
         padding: 0px;
         margin: 0px;
         &--hidden{
          display: none;
         };
         > .geosuggest__item {
            ${props => `
                background-color: ${props.theme.colors.white['0']};
                font-size: ${content.fontSize};
                color: ${props.theme.colors.grey[2]};
                line-height: ${content.lineHeight};
                font-family: ${props.theme.font.family};
                font-weight: ${props.theme.font.weight.standard};
                padding: ${bs(0.5)};
                &:hover{
                  cursor: pointer;
                  background-color: ${props.theme.colors.grey['-1']};
                }
                &--active {
                   background-color: ${props.theme.colors.ocean['-1']};
                };
            `};
       }
    }
  }
`;


function PlacesInput({
  theme,
  placeholder,
  value,
  errors,
  handleSelect,
  handleFocus,
  handleBlur,
  label,
  type,
  id,
  tabIndex,
}) {
  function placeSelected(suggest) {
    handleSelect({
      label: suggest.label,
      lat: suggest.location.lat,
      lng: suggest.location.lng,
      placeId: suggest.placeId,
    });
  }

  let errorArray = [];
  if (typeof errors === 'string') {
    errorArray = errorArray.concat(errors);
  } else {
    errorArray = errors;
  }
  const hasError = errorArray.length > 0;
  const labelColor = hasError ? 'red' : 'grey';
  const labelShade = hasError ? '0' : '1';
  return (
    <div>
      { label &&
      <LabelContainer>
        <Label text={label} color={labelColor} shade={labelShade} />
      </LabelContainer>
    }
      <InputContainerTag
        theme={theme}
        hasError={hasError}
      >
        <Geosuggest
          placeholder={placeholder}
          country={['ZA']}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSuggestSelect={select => placeSelected(select)}
        />
      </InputContainerTag>
      { hasError &&
        <InputErrorsContainer>
          <InputErrors errors={errorArray} />
        </InputErrorsContainer>
        }
    </div>
  );
}

PlacesInput.propTypes = {
  theme: PropTypes.shape(),
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ),
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
  ]),
  id: PropTypes.string.isRequired,
  tabIndex: PropTypes.string,
};

PlacesInput.defaultProps = {
  theme: kratedTheme,
  placeholder: undefined,
  handleFocus: undefined,
  handleBlur: undefined,
  label: undefined,
  errors: [],
  type: 'text',
  tabIndex: undefined,
};

export default PlacesInput;
