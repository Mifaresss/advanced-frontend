import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { HTMLAttributes, useState } from 'react'
import { useTranslation } from 'react-i18next'
import s from './Sidebar.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: Props) {
	const { t } = useTranslation()

	const [collapsed, setCollapsed] = useState(false)

	const toggleCollapsed = () => setCollapsed(prev => !prev)

	return (
		<aside
			data-testid='sidebar'
			className={getClsNames(s.sidebar, [className], { [s.collapsed]: collapsed })}
		>
			<div className={getClsNames(s.mainContent)}>
				<button data-testid='toggle' onClick={toggleCollapsed}>
					{t('sidebar.toggle')}
				</button>
				<h1>Sidebar</h1>
			</div>
			<div className={getClsNames(s.switchers)}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</aside>
	)
}
