import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ThemeDecorator from './themeDecorator';
import withProvider from '../src/libs/hoc/withProvider';

function loadStories() {
  const context = require.context('../src/stories', true, /Story\.jsx$/);
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
}

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

setAddon(JSXAddon);
configure(loadStories, module);
addDecorator(ThemeDecorator);
addDecorator(withProvider);
