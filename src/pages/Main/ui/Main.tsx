import { useTranslation } from 'react-i18next'

export default function Main() {
	const { t } = useTranslation()

	return (
		<>
			<h1>{t('main.title')}</h1>
		</>
	)
}
