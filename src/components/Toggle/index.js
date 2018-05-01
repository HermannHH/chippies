import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Switch from 'react-switch';
import kratedTheme from 'krated-theme';

import Label from '../Label';

const LabelWrapper = styled.div`
  padding-left: 10px;
  display: inline-block;
  position: relative;
  top: -5px;

  > label {
    cursor: pointer;
  }
`;


function Toggle({
  theme, id, checked, handleChange, label,
}) {
  return (
    <label htmlFor={id}>
      <Switch
        onChange={handleChange}
        checked={checked}
        id={id}
        offColor={theme.colors.grey[0]}
        onColor={theme.colors.blue[0]}
      />
      {label &&
        <LabelWrapper onClick={handleChange}>
          <Label text={label} />
        </LabelWrapper>
      }
    </label>
  );
}

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  theme: PropTypes.shape(),
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

Toggle.defaultProps = {
  theme: kratedTheme,
};

export default Toggle;
