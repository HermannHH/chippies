import React from 'react';
import PropTypes from 'prop-types';

import ColorBlock from '../ColorBlock';
import ColorDescription from '../ColorDescription';
import Pad from '../Pad';

function PaletteBlock({
  hex,
  name,
  inverse,
}) {
  return (
    <ColorBlock hex={hex}>
      <Pad all={{ xs: 1 }} top={{ xs: 3 }}>
        <ColorDescription name={name} hex={hex} inverse={inverse} />
      </Pad>
    </ColorBlock>
  );
}

PaletteBlock.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
};

PaletteBlock.defaultProps = {
  inverse: false,
};

export default PaletteBlock;
