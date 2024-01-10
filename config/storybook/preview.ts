import { addDecorator } from '@storybook/react'
import { StyleDecorator } from './decorators/StyleDecorator'
import { ThemeDecorator } from './decorators/ThemeDecorator'

const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: { color: /(background|color)$/i, date: /Date$/ },
		},
	},
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator)

export default preview
