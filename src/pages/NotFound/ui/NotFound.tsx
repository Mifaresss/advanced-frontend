import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { useTranslation } from 'react-i18next'
import s from './NotFound.module.scss'

export function NotFound() {
	const { t } = useTranslation()

	return <h1 className={getClsNames(s.notFound)}>{t('notFound.title')}</h1>
}
