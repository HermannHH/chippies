import React from 'react';
import { Margin, Padding } from 'styled-components-spacing';

import ColorBlock from '../ColorBlock';
import ColorDescription from '../ColorDescription';

function PaletteBlock() {
  return (
    <Padding all={{ mobile: 2, tablet: 4, desktop: 6 }}>
      <ColorBlock hex="#2A6DE3">
        <Margin top={6}>
          <ColorDescription name="Test" hex="#2A6DE3" />
        </Margin>
      </ColorBlock>
    </Padding>
  );
}

export default PaletteBlock;
