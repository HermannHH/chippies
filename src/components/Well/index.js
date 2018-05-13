import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Border from '../Border';
import Pad from '../Pad';

const Container = styled.div`
  position: relative;
`;


function Well({ children }) {
  return (
    <Container>
      <Border all rad>
        <Pad vertical={{ xs: 4 }} horizontal={{ xs: 5 }}>
          {children}
        </Pad>
      </Border>
    </Container>
  );
}

Well.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Well;
