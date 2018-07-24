import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import ReactPlaceholder from 'react-placeholder';
// import kratedTheme from 'krated-theme';
// import { shevyConfig } from '../helpers';

import Pad from '../Pad';

const Wrapper = styled.div`
  width: 100%;
`;

/**
 * Standard card container padding
 */

function CardPad({ children }) {
  return (
    <Wrapper>
      <Pad horizontal={{ xs: 4 }} vertical={{ xs: 4 }}>
        {children}
      </Pad>
    </Wrapper>
  );
}

CardPad.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default CardPad;
