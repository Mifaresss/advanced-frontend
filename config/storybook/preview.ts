import { Theme } from '@/app/providers/theme'
import { StyleDecorator } from '@/shared/config/storybook/decorators/StyleDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { addDecorator } from '@storybook/react'

const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: { color: /(background|color)$/i, date: /Date$/ },
		},
	},
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.DARK))

export default preview
