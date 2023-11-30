import './styles/index.scss'
import { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AsyncAbout } from './pages/About/About.async'
import { AsyncMain } from './pages/Main/Main.async'
import { useTheme } from './theme/useTheme'

interface Props {}

export function App({}: Props) {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Change theme</button>
			<Link to='/'>Main</Link>
			<Link to='/about'>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<AsyncMain />} />
					<Route path='/about' element={<AsyncAbout />} />
				</Routes>
			</Suspense>
		</div>
	)
}
