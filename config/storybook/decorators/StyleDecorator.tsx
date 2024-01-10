import { useTheme } from '@/app/providers/theme'
import '@/app/styles/index.scss'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { DecoratorFn } from '@storybook/react'

export const StyleDecorator: DecoratorFn = Story => {
	const { theme } = useTheme()

	return (
		<div className={getClsNames('app', [theme])}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
				<Story />
				<ThemeSwitcher />
			</div>
		</div>
	)
}
