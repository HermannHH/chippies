import React from 'react';
import PropTypes from 'prop-types';

import kratedTheme from 'krated-theme';

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
                  <PaletteBlock
                    name={`${x}(${y})`}
                    color={x}
                    shade={y}
                    hex={theme.colors[x][y]}
                    inverse={inverteds.includes(x)}
                  />
                </Display>
              ))))}
    </div>
  );
}

ColorPalette.propTypes = {
  theme: PropTypes.shape(),
};

ColorPalette.defaultProps = {
  theme: kratedTheme,
};

export default ColorPalette;
