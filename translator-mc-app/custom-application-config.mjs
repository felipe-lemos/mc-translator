import { PERMISSIONS } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'The Insider',
  description: 'Translate your products the right way',
  entryPointUriPath: '${env:ENTRY_POINT_URI_PATH}',
  cloudIdentifier: '${env:CLOUD_IDENTIFIER}',
  headers: {
    csp: {
      'connect-src': [
        'https://translation.googleapis.com/language/translate/v2',
      ],
    },
  },
  env: {
    development: {
      initialProjectKey: '${env:INITIAL_PROJECT_KEY}',
    },
    production: {
      applicationId: '${env:CUSTOM_APPLICATION_ID}',
      url: '${env:APPLICATION_URL}',
    },
  },
  additionalEnv: {
    translateApiKey: '${env:TRANSLATE_API_KEY}',
    translationMemoryContainer: '${env:TRANSLATION_MEMORY_CONTAINER}',
    translationMemoryObjectKey: '${env:TRANSLATION_MEMORY_OBJECT_KEY}',
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/gift.svg}',
  mainMenuLink: {
    defaultLabel: 'The Translator',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'products',
      defaultLabel: 'Products',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
