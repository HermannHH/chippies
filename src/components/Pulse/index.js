import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;

const PulsingContainer = styled.div`
  animation: 1.5s ${pulseAnimation} infinite;
`;


function Pulse({ children }) {
  return (
    <PulsingContainer>
      {children}
    </PulsingContainer>
  );
}

Pulse.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Pulse;