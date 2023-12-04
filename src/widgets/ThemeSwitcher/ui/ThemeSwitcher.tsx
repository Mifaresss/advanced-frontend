import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {}

export function ThemeSwitcher({ className }: Props) {
	return <button title='Toggle theme'></button>
}
