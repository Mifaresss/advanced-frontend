/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react'

export const AsyncAbout = lazy(
	() =>
		new Promise(resolve => {
			// @ts-ignore
			setTimeout(() => resolve(import('./About')), 500)
		}),
)
