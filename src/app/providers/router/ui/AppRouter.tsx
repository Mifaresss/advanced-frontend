import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "../config"

interface Props {}

export function AppRouter({}: Props) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(routeProps => (
					<Route key={routeProps.path} {...routeProps} />
				))}
			</Routes>
		</Suspense>
	)
}
