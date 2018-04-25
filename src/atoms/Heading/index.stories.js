import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import atoms from '../index.stories';

import Heading from './index';

atoms.add(
  'Heading',
  withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Heading />
      ~~~
    
    `)(props => 
        <div>
            <Heading
                text={text('text', 'Heading 1')}
                size='1'
            />
            <Heading
                text={text('text', 'Heading 2')}
                size='2'
            />
            <Heading
                text={text('text', 'Heading 3')}
                size='3'
            />
            <Heading
                text={text('text', 'Heading 4')}
                size='4'
            />
            <Heading
                text={text('text', 'Heading 5')}
                size='5'
            />
            <Heading
                text={text('text', 'Heading 6')}
                size='6'
            />
    </div>
    ),
);
