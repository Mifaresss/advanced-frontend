import { langs } from '@/shared/assets/langs'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'ru',
		debug: _IS_DEV_,
		resources: {
			ru: {
				translation: langs.ru,
			},
			en: {
				translation: langs.en,
			},
		},
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
