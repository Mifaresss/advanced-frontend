import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { ULink, ULinkTheme } from './ULink'

export default {
	title: 'shared/ULink',
	component: ULink,
	argTypes: {},
} as ComponentMeta<typeof ULink>

const Template: ComponentStory<typeof ULink> = (args: ULink.Props) => (
	<BrowserRouter>
		<ULink {...args} />
	</BrowserRouter>
)

export const Primary = Template.bind({})
Primary.args = {
	children: 'Text',
}

export const Inverded = Template.bind({})
Inverded.args = {
	children: 'Text',
	theme: ULinkTheme.INVERTED,
}
