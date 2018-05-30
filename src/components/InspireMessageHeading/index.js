import React from 'react';
import PropTypes from 'prop-types';
// import kratedTheme from 'krated-theme';

import { randomMessage } from '../helpers';
import Heading from '../Heading';


function InspireMessageHeading({
  size,
  color,
  shade,
}) {
  return (
    <Heading text={randomMessage()} size={size} color={color} shade={shade} />
  );
}

InspireMessageHeading.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  color: PropTypes.string.isRequired,
  shade: PropTypes.number.isRequired,
};

InspireMessageHeading.defaultProps = {
};

export default InspireMessageHeading;

