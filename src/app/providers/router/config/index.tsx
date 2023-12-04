import { About } from '@/pages/About'
import { Main } from '@/pages/Main'
import { RouteProps } from 'react-router-dom'

export enum AppRouters {
	MAIN = "main",
	ABOUT = "about",
}

// type RoutePaths = Record<AppRouters, string>
// export const routePaths: RoutePaths = Object.fromEntries(
// 	Object.entries(AppRouters).map(([_, value]) => [value, `/${value}`])
// ) as RoutePaths
export const routePaths: Record<AppRouters, string> = {
	[AppRouters.MAIN]: '/',
	[AppRouters.ABOUT]: '/about',
}

// export const routeConfig = Object.values(AppRouters).map(route => ({
// 	path: routePaths[route],
// 	element: <div>{route}</div>,
// }))
export const routeConfig: Record<AppRouters, RouteProps> = {
	[AppRouters.MAIN]: {
		path: routePaths[AppRouters.MAIN],
		element: <Main />,
	},
	[AppRouters.ABOUT]: {
		path: routePaths[AppRouters.ABOUT],
		element: <About />,
	},
}