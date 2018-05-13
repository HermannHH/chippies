import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VerticalAlign = styled.div`
  display: flex;
  align-items: center;
`;

function VerticalMiddle({
  children,
}) {
  return (
    <VerticalAlign>
      {children}
    </VerticalAlign>
  );
}

VerticalMiddle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

VerticalMiddle.defaultProps = {
};

export default VerticalMiddle;
