import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'SPIDI API Documentation',
    brandUrl: 'https://spidipagos.com',
    brandImage: 'https://cdn.prod.website-files.com/6896a0bf93dea7e2613697a8/68ac657b4bb55066be716e77_favicon2.png',
    brandTarget: '_self',
  },
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
