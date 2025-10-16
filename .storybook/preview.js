/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Introduction',
          'API-SPIDI', [
            'Acuerdo',
            'Sesion Boton de Pago', [
            ],
            'Sesion Solicitud de Pago', [
            ],
            'Parada',
            'Asociar Solicitud a Parada',
          ],
          'API-MAP', [
            'Sofitasa', [
              'Mapeo Plataforma', [
                'Crear Operador',
              ],
            ],
            'Crixto', [
              'Mapeo Spidi', [
                'Sesion Cripto',
              ],
            ],
          ],
          'DOCS', [
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
