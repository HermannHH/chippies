import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Display from '../Display';
import PaletteBlock from '../PaletteBlock';

function ColorPalette({
  theme,
}) {
  const inverteds = ['black'];
  return (
    <div>
      {Object.keys(theme.colors).map(x => (
              Object.keys(theme.colors[x]).map(y => (
                <Display key={`${x}_${y}`} type="inline-block">
                  <PaletteBlock hex={theme.colors[x][y]} name={`${x}(${y})`} inverse={inverteds.includes(x) && true} />
                </Display>
              ))))}
    </div>
  );
}

ColorPalette.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default withTheme(ColorPalette);
