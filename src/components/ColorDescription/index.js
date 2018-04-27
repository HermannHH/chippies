import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import Paragraph from '../Paragraph';
import TextAlign from '../TextAlign';


function ColorDescription({ name, hex, inverse }) {
  const color = inverse ? 'white' : 'black';
  return (
    <TextAlign align="center">
      <Label text={name} color={color} />
      <Paragraph color={color}>{hex}</Paragraph>
    </TextAlign>
  );
}

ColorDescription.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
};

ColorDescription.defaultProps = {
  inverse: false,
};

export default ColorDescription;
