import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const StyleDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;

const molecules = storiesOf('Molecules', module);
molecules.addDecorator(withKnobs);
molecules.addDecorator(StyleDecorator);

export default molecules;
