import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './locale/en.json'
import ptBRTranslations from './locale/ptBR.json'
import esTranslations from './locale/es.json'
import frTranslations from './locale/fr.json'

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    resources: {
        en: {...enTranslations},
        es: {...esTranslations},
        fr: {...frTranslations},
        ptBR: {...ptBRTranslations},
    }
    
})


export default i18n