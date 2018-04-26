import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import molecules from '../index.stories';

import ColorDetails from './index';

molecules.add(
  'ColorDetails',
  withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <ColorDetails />
      ~~~
    
    `)(props => <ColorDetails />),
);
