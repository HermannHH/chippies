import React from 'react';
import PropTypes from 'prop-types';

import ColorBlock from '../ColorBlock';
import ColorDescription from '../ColorDescription';
import Pad from '../Pad';

function PaletteBlock({
  color, hex, inverse, shade, name,
}) {
  return (
    <ColorBlock color={color} shade={shade}>
      <Pad all={{ xs: 1 }} top={{ xs: 3 }}>
        <ColorDescription name={name} hex={hex} color={color} inverse={inverse} />
      </Pad>
    </ColorBlock>
  );
}

PaletteBlock.propTypes = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  shade: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
};

PaletteBlock.defaultProps = {
  inverse: false,
};

export default PaletteBlock;
