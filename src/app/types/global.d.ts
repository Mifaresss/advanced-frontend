import { FunctionComponent, SVGAttributes } from 'react'

declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}

declare module '*.svg' {
	const content: FunctionComponent<SVGAttributes<SVGElement>>
	export default content
}
