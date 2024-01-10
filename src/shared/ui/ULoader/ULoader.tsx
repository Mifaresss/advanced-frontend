import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { HTMLAttributes } from 'react'
import s from './ULoader.module.scss'

export declare namespace ULoader {
	interface Props extends HTMLAttributes<HTMLSpanElement> {}
}

export function ULoader({ className, ...props }: ULoader.Props) {
	return <span className={getClsNames(s.loader, [className])} {...props}></span>
}
