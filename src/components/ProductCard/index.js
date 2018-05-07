import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import CardCover from '../CardCover';
import CardTitle from '../CardTitle';


function ProductCard({ text, src, handleClick }) {
  return (
    <Card
      handleClick={handleClick}
    >
      <CardCover
        src={src}
      />
      <CardTitle
        text={text}
      />
    </Card>
  );
};

ProductCard.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductCard;