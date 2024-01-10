import { InvertedBackgroundDecorator } from '@/shared/config/storybook/decorators/InvertedBackgroundDecorator'
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

export const Inverted = Template.bind({})
Inverted.decorators = [InvertedBackgroundDecorator]
const invertedArgs: ULink.Props = {
	children: 'Text',
	theme: ULinkTheme.INVERTED,
	to: '/',
}
Inverted.args = invertedArgs
