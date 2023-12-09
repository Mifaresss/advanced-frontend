import { PageError } from '@/widgets/PageError/PageError'
import { Component, ErrorInfo, ReactNode, Suspense } from 'react'

interface Props {
	children: ReactNode
}
interface State {
	hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		const { children } = this.props
		const { hasError } = this.state

		return hasError ? (
			<Suspense fallback=''>
				<PageError />
			</Suspense>
		) : (
			children
		)
	}
}

export default ErrorBoundary
