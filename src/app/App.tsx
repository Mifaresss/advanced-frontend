import '@/shared/config/i18n/i18n'
import { getClsNames } from '@/shared/lib/helpers/classNames/getClsNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar/ui'
import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router/ui/AppRouter'
import { useTheme } from './providers/Theme'
import './styles/index.scss'

export function App() {
	const { theme } = useTheme()

	useEffect(() => {
		throw new Error()
	}, [])

	return (
		<main className={getClsNames('app', [theme])}>
			<Suspense fallback=''>
				<Navbar />
				<section className='main-content'>
					<Sidebar />
					<AppRouter />
				</section>
			</Suspense>
		</main>
	)
}
