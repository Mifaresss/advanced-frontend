import { DecoratorFn } from '@storybook/react'

export const InvertedBackgroundDecorator: DecoratorFn = Story => (
	<div style={{ backgroundColor: 'var(--inverted-bg-c)', padding: '1rem' }}>
		<Story />
	</div>
)
