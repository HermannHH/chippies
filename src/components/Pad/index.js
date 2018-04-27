import React from 'react';
import PropTypes from 'prop-types';
import { Padding } from 'styled-components-spacing';

/**
 * Adds responsive padding around child / children
 */
function Pad({
  all,
  children,
  horizontal,
  vertical,
  top,
  right,
  bottom,
  left,
}) {
  return (
    <Padding
      all={all}
      horizontal={horizontal}
      vertical={vertical}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {children}
    </Padding>
  );
}

Pad.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  all: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  horizontal: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  vertical: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  top: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  right: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  bottom: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  left: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
};

Pad.defaultProps = {
  all: null,
  horizontal: null,
  vertical: null,
  top: null,
  right: null,
  bottom: null,
  left: null,
};

export default Pad;
