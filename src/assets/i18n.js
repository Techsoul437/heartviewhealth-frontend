import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en.json';
import hi from './locales/hi.json';

const i18n = new I18n({
  en,
  hi,
});

i18n.enableFallback = true;

// detect device language
const locales = RNLocalize.getLocales();
if (locales?.length) {
  i18n.locale = locales[0].languageCode; // "en" or "hi"
}

export default i18n;
