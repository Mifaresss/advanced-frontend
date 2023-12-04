import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { getClsNames } from '@/shared/lib/helpers/getClsNames'
import { HTMLAttributes, useState } from 'react'
import s from './Sidebar.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: Props) {
	const [collapsed, setCollapsed] = useState(false)

	const toggleCollapsed = () => setCollapsed(prev => !prev)

	return (
		<aside
			className={getClsNames(s.sidebar, [className], { [s.collapsed]: collapsed })}
		>
			<div className={getClsNames(s.mainContent)}>
				<button onClick={toggleCollapsed}>Toggle sidebar</button>
				<h1>Sidebar</h1>
			</div>
			<div className={getClsNames(s.switchers)}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</aside>
	)
}
