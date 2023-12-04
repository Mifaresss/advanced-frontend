import { ULink } from '@/shared/ui/ULink/ULink'
import { HTMLAttributes } from 'react'
import s from './Navbar.module.scss'

interface Props extends HTMLAttributes<HTMLElement> {}

export function Navbar({className}: Props) {

	return (
		<nav className={s.navbar}>
			<ULink to='/'>Main</ULink>
			<ULink to='/about'>About</ULink>
		</nav>
	)
}
