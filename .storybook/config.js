import { configure } from '@storybook/react';

import { configure as viewPortConfig } from '@storybook/addon-viewport';

import { setOptions } from '@storybook/addon-options';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setOptions({
  name: "Chippies UI Library",
  addonPanelInRight: true,
});

configure(loadStories, module);
viewPortConfig();
