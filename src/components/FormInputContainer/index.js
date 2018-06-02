import React from 'react';
import PropTypes from 'prop-types';

import Mrg from '../Mrg';

/**
 * Wraps form items such as inputs
 */

function FormInputContainer({ children, position }) {
  return (
    <Mrg vertical={{ xs: 3 }} left={position === 'right' && { lg: 2 }} right={position === 'left' && { lg: 2 }} >
      {children}
    </Mrg>
  );
}

FormInputContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  position: PropTypes.oneOf(['left', 'right']),
};

FormInputContainer.defaultProps = {
  position: undefined,
};

export default FormInputContainer;
