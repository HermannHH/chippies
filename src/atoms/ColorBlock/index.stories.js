import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import atoms from '../index.stories';

import ColorBlock from './index';

atoms.add(
  'ColorBlock',
  withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <ColorBlock />
      ~~~
    
    `)(props => <ColorBlock hex="#2A6DE3" />),
);
