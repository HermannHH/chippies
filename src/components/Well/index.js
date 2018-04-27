import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import Pad from '../Pad';


const Container = styled.div`
  border: thin solid red;
  ${props => `
    border-radius: ${props.theme.borders.radius}px;
  `};
`;

function Well({ theme, children }) {
  return (
    <Container theme={theme}>
      <Pad vertical={{ xs: 4 }} horizontal={{ xs: 5 }}>
        {children}
      </Pad>
    </Container>);
}

Well.propTypes = {
  theme: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
};

export default withTheme(Well);
