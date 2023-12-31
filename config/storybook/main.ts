import type { StorybookConfig } from '@storybook/core-common'

const config: StorybookConfig = {
	stories: ['../../src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
}

export default config
