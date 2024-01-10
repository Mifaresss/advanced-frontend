import { ThemeProvider } from '@/app/providers/theme'
import '@/app/styles/index.scss'
import { DecoratorFn } from '@storybook/react'

export const ThemeDecorator: DecoratorFn = Story => (
	<ThemeProvider>
		<div className='themeDecorator'>
			<Story />
		</div>
	</ThemeProvider>
)
