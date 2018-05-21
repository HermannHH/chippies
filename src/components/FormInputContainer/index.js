import React from 'react';
import PropTypes from 'prop-types';

import Mrg from '../Mrg';

/**
 * Wraps form items such as inputs
 */

function FormInputContainer({ children }) {
  return (
    <Mrg vertical={{ xs: 3 }}>
      {children}
    </Mrg>
  );
}

FormInputContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default FormInputContainer;