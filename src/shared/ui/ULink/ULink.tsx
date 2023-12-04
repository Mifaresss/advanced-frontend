import { getClassNames } from '@/shared/lib/helpers/getClassNames'
import { Link, LinkProps } from 'react-router-dom'
import s from './ULink.module.scss'

export enum ULinkTheme {
	PRIMARY = 'primary',
	INVERTED = 'inverted',
}

interface Props extends LinkProps {
	theme?: ULinkTheme
}

export function ULink({ className, children, theme = ULinkTheme.PRIMARY, ...props }: Props) {

	return (
		<Link className={getClassNames(s.link, [className, s[theme]])} {...props}>
			{children}
		</Link>
	)
}
