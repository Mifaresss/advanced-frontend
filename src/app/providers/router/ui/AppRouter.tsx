import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { ULoader } from '@/shared/ui'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config'
import s from './AppRouter.module.scss'

interface Props {}

export function AppRouter({}: Props) {
	return (
		<Routes>
			{Object.values(routeConfig).map(({ element, ...otherProps }) => (
				<Route
					key={otherProps.path}
					{...otherProps}
					element={
						<Suspense fallback={<ULoader className={getClsNames(s.pageLoader)} />}>
							<div className='page'>{element}</div>
						</Suspense>
					}
				/>
			))}
		</Routes>
	)
}
