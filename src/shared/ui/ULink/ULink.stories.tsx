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
const primaryArgs: ULink.Props = { children: 'Text', to: '/' }
Primary.args = primaryArgs

const InvertedTemplate: ComponentStory<typeof ULink> = (args: ULink.Props) => (
	<BrowserRouter>
		<div style={{ backgroundColor: 'var(--inverted-bg-c)', padding: '1.5rem' }}>
			<ULink {...args} />
		</div>
	</BrowserRouter>
)
export const Inverded = InvertedTemplate.bind({})
const invertedArgs: ULink.Props = {
	children: 'Text',
	theme: ULinkTheme.INVERTED,
	to: '/',
}
Inverded.args = invertedArgs
