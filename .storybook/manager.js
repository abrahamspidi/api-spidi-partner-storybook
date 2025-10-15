import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'SPIDI API Documentation',
    brandUrl: 'https://spidipagos.com',
    brandImage: 'https://dev.api.spuntodeventa.com/api/spidipagos/resource-proxy?url=https%3A%2F%2Fcdn.prod.website-files.com%2F6896a0bf93dea7e2613697a8%2F689f3552756c7526ac3e5e8b_2640dc400d7916c681fa83288e142628_isotipo.svg',
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
