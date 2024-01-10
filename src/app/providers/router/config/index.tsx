import { About } from '@/pages/About'
import { Main } from '@/pages/Main'
import { NotFound } from '@/pages/NotFound'
import { RouteProps } from 'react-router-dom'

export enum AppRouters {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not-found',
}

export const routePaths: Record<AppRouters, string> = {
	[AppRouters.MAIN]: '/',
	[AppRouters.ABOUT]: '/about',
	[AppRouters.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRouters, RouteProps> = {
	[AppRouters.MAIN]: {
		path: routePaths[AppRouters.MAIN],
		element: <Main />,
	},
	[AppRouters.ABOUT]: {
		path: routePaths[AppRouters.ABOUT],
		element: <About />,
	},
	[AppRouters.NOT_FOUND]: {
		path: routePaths[AppRouters.NOT_FOUND],
		element: <NotFound />,
	},
}
