import { ThemeProvider } from '@/app/providers/theme'
import '@/app/styles/index.scss'
import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { DecoratorFn } from '@storybook/react'

export const StyleDecorator: DecoratorFn = Story => {
	return (
		<ThemeProvider>
			<div className={getClsNames('app')}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
					<Story />
				</div>
			</div>
		</ThemeProvider>
	)
}
