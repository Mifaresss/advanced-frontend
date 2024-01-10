import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Sidebar } from './Sidebar'

export default {
	title: 'widgets/Sidebar',
	component: Sidebar,
	argTypes: {},
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args: Sidebar.Props) => (
	<Sidebar {...args} />
)

export const Primary = Template.bind({})
