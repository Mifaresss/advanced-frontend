import { useTheme } from '@/app/providers/theme'
import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
	title: 'features/ThemeSwitcher',
	component: ThemeSwitcher,
	argTypes: {},
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args: ThemeSwitcher.Props) => {
	const { theme } = useTheme()

	return (
		<div
			className={getClsNames('app', [theme])}
			style={{ backgroundColor: 'var(--inverted-bg-c)' }}
		>
			<ThemeSwitcher {...args} />
		</div>
	)
}

export const Primary = Template.bind({})
