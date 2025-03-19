import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import enJSON from './translations/en';
import esJSON from './translations/es';
import frJSON from './translations/fr';
import trJSON from './translations/tr';
import plJSON from './translations/pl';
import ptBRJSON from './translations/pt_BR';
import { FlagComponent } from 'country-flag-icons/react/1x1';
import { BR, ES, FR, PL, TR, US } from 'country-flag-icons/react/3x2';

const resources = {
  // de: { translation: deJSON },
  en: { translation: enJSON },
  es: { translation: esJSON },
  fr: { translation: frJSON },
  pl: { translation: plJSON },
  // ae: { translation: aeJSON },
  // cn: { translation: zhJSON },
  tr: { translation: trJSON },
  pt_br: { translation: ptBRJSON }
};

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: false,
    lng: 'pt_br',
    fallbackLng: 'pt_br',
    react: {
      useSuspense: true
    },
    interpolation: {
      escapeValue: false
    }
  });

export type SupportedLanguage = 'EN' | 'FR' | 'TR' | 'ES' | 'PT_BR' | 'PL';

export const supportedLanguages: {
  code: string;
  label: string;
  Icon: FlagComponent;
}[] = [
  { code: 'en', label: 'English', Icon: US },
  { code: 'fr', label: 'French', Icon: FR },
  { code: 'es', label: 'Spanish', Icon: ES },
  { code: 'tr', label: 'Turkish', Icon: TR },
  { code: 'pt_br', label: 'Portuguese (Brazil)', Icon: BR },
  { code: 'pl', label: 'Polish', Icon: PL }
];
export default i18n;
