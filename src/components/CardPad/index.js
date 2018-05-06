import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import ReactPlaceholder from 'react-placeholder';
// import kratedTheme from 'krated-theme';
// import { shevyConfig } from '../helpers';

import Pad from '../Pad';

/**
 * Standard card container padding
 */

function CardPad({ children }) {
  return (
    <Pad
      all={{ xs: 1 }}
    >
      {children}
    </Pad>
  );
}

CardPad.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default CardPad;
