import { ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	function toggleTheme() {
		setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
	}

	const providerProps = useMemo(() => ({ theme, setTheme }), [theme])

	return <ThemeContext.Provider value={providerProps}>{children}</ThemeContext.Provider>
}
