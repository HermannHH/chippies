import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Switch from 'react-switch';

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
  theme, id, checked, handleChange,
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
      <LabelWrapper onClick={handleChange}>
        <Label text="Leave a comment" />
      </LabelWrapper>
    </label>
  );
}

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  theme: PropTypes.shape().isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
};

export default withTheme(Toggle);
