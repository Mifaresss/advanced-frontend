import { getClassNames } from '@/shared/lib/helpers/getClassNames'
import { Navbar } from '@/widgets/Navbar'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { AppRouter } from './providers/router/ui/AppRouter'
import { useTheme } from './providers/Theme'
import './styles/index.scss'

interface Props {}

export function App({}: Props) {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={getClassNames('app', [theme])}>
			<ThemeSwitcher />
			<Navbar />
			<AppRouter />
		</div>
	)
}
