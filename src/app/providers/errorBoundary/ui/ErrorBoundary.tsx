import { Component, ErrorInfo, ReactNode } from 'react'

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

	static getDerivedStateFromError(error: Error) {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		const { children } = this.props
		const { hasError } = this.state

		if (hasError) {
			return <h1>Something went wrong.</h1>
		}

		return children
	}
}

export default ErrorBoundary
