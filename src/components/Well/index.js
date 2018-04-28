import React from 'react';
import PropTypes from 'prop-types';
// import styled, { withTheme } from 'styled-components';

import Border from '../Border';
import Pad from '../Pad';


function Well({ children }) {
  return (
    <Border all radius>
      <Pad vertical={{ xs: 4 }} horizontal={{ xs: 5 }}>
        {children}
      </Pad>
    </Border>);
}

Well.propTypes = {
//   theme: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
};

export default Well;
