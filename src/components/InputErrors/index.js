import React from 'react';
import PropTypes from 'prop-types';

import Small from '../Small';

function InputErrors({
  errors, color, shade,
}) {
  return (
    <Small color={color} shade={shade}>
      {errors.join(', ')}
    </Small>
  );
}

InputErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string,
  shade: PropTypes.string,
};

InputErrors.defaultProps = {
  color: 'red',
  shade: '0',
};

export default InputErrors;
