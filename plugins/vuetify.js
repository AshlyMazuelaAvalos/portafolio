// plugins/vuetify.ts
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#EDE7F6',     // lavanda muy claro
            surface: '#FFF8E1',        // amarillo pálido
            primary: '#4B2E83',        // morado oscuro
            secondary: '#7E57C2',      // morado medio
            accent: '#B39DDB',         // lila
            success: '#AEEA00',        // verde lima
            customDarkGreen: '#33691E'// verde oliva oscuro
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#B183C6',
            secondary: '#E4DCF1',
            tertiary: '#7A3EA1',
            accent: '#4B1E78',
            highlight: '#FBECC3',
            success: '#A4C63B',
            warning: '#4E6313',        
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
