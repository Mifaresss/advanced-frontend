import { useTranslation } from 'react-i18next'
import s from './PageError.module.scss'

export function PageError() {
	const { t } = useTranslation()

	return (
		<div className={s.wrapper}>
			<h1>{t('error')}</h1>
			<button onClick={location.reload}>{t('reload')}</button>
		</div>
	)
}
