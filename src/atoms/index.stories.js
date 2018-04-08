import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';


const StyleDecorator = storyFn => (
      <ThemeProvider theme={theme}>
        { storyFn() }
      </ThemeProvider>
  );
  

const atoms = storiesOf('Atoms', module);
atoms.addDecorator(withKnobs);
atoms.addDecorator(StyleDecorator);

export default atoms;