import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  ${props => `
    text-align: ${props.align};
  `};
`;

function TextAlign({ children, align }) {
  return (
    <Container align={align}>{children}</Container>
  );
}

TextAlign.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
    'justified',
  ]),
};

TextAlign.defaultProps = {
  align: 'left',
};

export default TextAlign;
