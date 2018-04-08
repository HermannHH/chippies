import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import atoms from '../index.stories';

import Button from './index';

atoms.add('Button',
  withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button />
      ~~~
    
    `)(props => (
    <Button
      text={text('text', 'Save')}
      disabled={boolean('disabled', false)}
      handleClick={action('handleClick')}
      loadingText={text('loadingText', '')}
      fill={boolean('fill', false)}
    >
      I am child
    </Button>),
  ),
);