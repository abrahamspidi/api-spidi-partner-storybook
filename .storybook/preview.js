/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Introduction',
          'API', [
            'Acuerdo',
            'Sesion Boton de Pago', [
              '0. Resumen',
              '1. Crear Sesion B',
              // '2. Obtener Sesion B',
              // '3. Actualizar Sesion B',
              // '4. Eliminar Sesion B',
            ],
            'Parada',
            'Sesion Solicitud de Pago', [
              '0. Resumen',
              '1. Crear Sesion S',
              // '2. Obtener Sesion S',
              // '3. Actualizar Sesion S',
              // '4. Eliminar Sesion S',
            ]
          ],
          'Examples', [
            'Servicios', [
              'Autenticacion',
            ],
            'Playbook',
          ]
        ],
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
