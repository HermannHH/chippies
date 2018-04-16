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
  

const templates = storiesOf('Templates', module);
templates.addDecorator(withKnobs);
templates.addDecorator(StyleDecorator);

export default templates;