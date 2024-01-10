import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Navbar } from './Navbar'

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	argTypes: {},
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args: Navbar.Props) => (
	<Navbar {...args} />
)

export const Primary = Template.bind({})
const primaryArgs: Navbar.Props = {}
Primary.args = primaryArgs
