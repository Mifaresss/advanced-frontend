import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import s from './LangSwitcher.module.scss'

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export function LangSwitcher({ className, ...props }: Props) {
	const { t, i18n } = useTranslation()

	const toggleLang = async () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	}

	return (
		<button
			onClick={toggleLang}
			className={getClsNames(s.button, [className])}
			{...props}
		>
			{t('lang')}
		</button>
	)
}
