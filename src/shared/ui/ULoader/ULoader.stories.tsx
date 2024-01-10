import { Theme } from '@/app/providers/theme'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ULoader } from './ULoader'

export default {
	title: 'shared/ULoader',
	component: ULoader,
	argTypes: {},
} as ComponentMeta<typeof ULoader>

const Template: ComponentStory<typeof ULoader> = (args: ULoader.Props) => (
	<ULoader {...args} />
)

export const DarkTheme = Template.bind({})

export const LightTheme = Template.bind({})
LightTheme.decorators = [ThemeDecorator(Theme.LIGHT)]
