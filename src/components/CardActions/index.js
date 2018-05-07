import React from 'react';
import PropTypes from 'prop-types';

import CardPad from '../CardPad';
import FlexPosition from '../FlexPosition';


function CardActions({ comps, layout }) {
  return (
    <CardPad>
      <FlexPosition
        comps={comps}
        layout={layout}
      />
    </CardPad>
  );
}

CardActions.propTypes = {
  comps: PropTypes.arrayOf(PropTypes.element).isRequired,
  layout: PropTypes.oneOf([
    'spread',
    'left',
    'right',
    'center',
  ]),
};

CardActions.defaultProps = {
  layout: 'right',
};

export default CardActions;
