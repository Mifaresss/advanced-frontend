import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { ULink } from '@/shared/ui'
import { ULinkTheme } from '@/shared/ui/ULink/ULink'
import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import s from './Navbar.module.scss'

export declare namespace Navbar {
	interface Props extends HTMLAttributes<HTMLElement> {}
}

export function Navbar({ className, ...props }: Navbar.Props) {
	const { t } = useTranslation()

	return (
		<nav className={getClsNames(s.navbar, [className])} {...props}>
			<ULink theme={ULinkTheme.INVERTED} to='/'>
				{t('main.title')}
			</ULink>
			<ULink theme={ULinkTheme.INVERTED} to='/about'>
				{t('about.title')}
			</ULink>
		</nav>
	)
}
