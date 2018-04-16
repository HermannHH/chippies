import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import templates from '../index.stories';

import FullScreenMiddleBlock from './index';

templates.add('FullScreenMiddleBlock',
  withInfo(`
      Responsive box size and center positioned relative to the viewport
    
      ~~~js
      <FullScreenMiddleBlock />
      ~~~
    
    `)(props => (
      <FullScreenMiddleBlock/>
    ),
  ),
);