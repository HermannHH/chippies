import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo';

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);

stories.add('simple info',
    withInfo({
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      },
      text: 'String or React Element with docs about my component', // Warning! This option's name will be likely renamed to "summary" in 3.3 release. Follow this PR #1501 for details
      // other possible options see in Global options section below
    })(() =>
<button disabled={boolean('Disabled', false)} >
    {text('Label', 'Hello Button')}
  </button>
    )
  )

// Knobs for React props
stories.add('with a button', () => (
  <button disabled={boolean('Disabled', false)} >
    {text('Label', 'Hello Button')}
  </button>
));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
