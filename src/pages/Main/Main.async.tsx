import { lazy } from 'react'

export const AsyncMain = lazy(
	() =>
		new Promise(resolve => {
			// @ts-ignore
			setTimeout(() => resolve(import('./Main')), 500)
		})
)
