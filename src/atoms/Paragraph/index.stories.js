import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import atoms from '../index.stories';

import Paragraph from './index';

atoms.add(
  'Paragraph',
  withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Paragraph />
      ~~~
    
    `)(props => (
      <div>
        <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </div>
  )),
);
