import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
  ${props => `
    display: ${props.type};
  `};
`;

/**
 * Wraps any element/s in a display helper such as block, inline, inline-block, hidden etc.
 */

function Display({ children, type }) {
  return (
    <Container type={type}>{children}</Container>
  );
}

Display.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  type: PropTypes.oneOf([
    'inline',
    'inline-block',
    'block',
  ]).isRequired,
};

export default Display;
