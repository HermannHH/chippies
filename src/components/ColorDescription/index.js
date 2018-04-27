import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Paragraph } from '../../components';

function ColorDescription({ name, hex }) {
  return (
    <div>
      <Heading text={name} size="5" />
      <Paragraph>{hex}</Paragraph>
    </div>
  );
}

ColorDescription.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
};

export default ColorDescription;
