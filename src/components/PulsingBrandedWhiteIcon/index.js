import React from 'react';
// import PropTypes from 'prop-types';

import Pulse from '../Pulse';
import BrandedWhiteIcon from '../BrandedWhiteIcon';


function PulsingBrandedWhiteIcon() {
  return (
    <Pulse>
      <BrandedWhiteIcon />
    </Pulse>
  );
}

// PulsingBrandedWhiteIcon.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default PulsingBrandedWhiteIcon;
