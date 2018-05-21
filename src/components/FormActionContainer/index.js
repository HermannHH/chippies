import React from 'react';
import PropTypes from 'prop-types';

import Mrg from '../Mrg';
import FlexPosition from '../FlexPosition';

/**
 * Wraps form items such as inputs
 */

function FormActionContainer({ actions, flexType }) {
  return (
    <Mrg top={{ xs: 5 }} bottom={{ xs: 3 }}>
      <FlexPosition
        comps={actions}
        layout={flexType}
      />
    </Mrg>
  );
}

FormActionContainer.propTypes = {
  actions: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  flexType: PropTypes.oneOf([
    'spread',
    'left',
    'right',
    'center',
  ]),
};

FormActionContainer.defaultProps = {
  flexType: 'right',
};

export default FormActionContainer;
