import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config'

interface Props {}

export function AppRouter({}: Props) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ element, ...otherProps }) => (
					<Route
						key={otherProps.path}
						{...otherProps}
						element={<div className='page'>{element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	)
}
