import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { HTMLAttributes } from 'react'
import s from './ULoader.module.scss'

interface Props extends HTMLAttributes<HTMLSpanElement> {}

export function ULoader({ className, ...props }: Props) {
	return (
		<div className={getClsNames(s.wrapper)}>
			<span className={getClsNames(s.loader, [className])} {...props}></span>
		</div>
	)
}
