import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import CardCover from '../CardCover';
import CardTitle from '../CardTitle';
import CardActions from '../CardActions';
import Hyperlink from '../Hyperlink';


function ProductCard({ text, src, handleClick }) {
  return (
    <Card>
      <CardCover
        src={src}
      />
      <CardTitle
        text={text}
      />
      <CardActions
        comps={[
          <Hyperlink text="I am Hyperlink" handleClick={handleClick} icon="faPlus" buttonPad />
        ]}
        layout="right"
      />
    </Card>
  );
}

ProductCard.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductCard;
