import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'SPIDI API Documentation',
    brandUrl: 'https://spidipagos.com',
    brandImage: 'https://cdn.prod.website-files.com/646d587c5dac12709add55e4/647a051a2fedb5b622a63dec_Vectors-Wrapper.svg',
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
