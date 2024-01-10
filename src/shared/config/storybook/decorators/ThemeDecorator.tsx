import { Theme } from '@/app/providers/theme'
import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { Story } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
	<div className={getClsNames('app', [theme])}>
		<Story />
	</div>
)
