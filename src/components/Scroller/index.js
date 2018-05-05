import React from 'react';
import PropTypes from 'prop-types';
// import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';

const ScrollerWrapper = styled.div`
  width: 100%;
  overflow-x: none;
  overflow-y: auto;
  height: ${props => `${props.height}px`};
`;

/**
 * Fills the width (auto) & height (requires px number for height) of parent. Any vertical overflow will be scrollable
 */

function Scroller({
  children,
  height,
}) {
  return (
    <ScrollerWrapper height={height}>
      {children}
    </ScrollerWrapper>
  );
}

Scroller.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  height: PropTypes.number.isRequired,
};

export default Scroller;
