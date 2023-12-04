import { getClassNames } from "@/shared/lib/helpers/getClassNames"
import { Navbar } from '@/widgets/Navbar'
import { AppRouter } from "./providers/router/ui/AppRouter"
import { useTheme } from "./providers/Theme"
import "./styles/index.scss"

interface Props {}

export function App({}: Props) {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={getClassNames("app", [theme])}>
			<button onClick={toggleTheme}>Change theme</button>
			<Navbar />
			<AppRouter />
		</div>
	)
}
