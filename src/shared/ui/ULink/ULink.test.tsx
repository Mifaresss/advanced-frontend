import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ULink, ULinkTheme } from './ULink'

describe('ULink', () => {
	test('renders ULink component with default theme', () => {
		render(
			<BrowserRouter>
				<ULink to='/'>Home</ULink>
			</BrowserRouter>,
		)
		const linkElement = screen.getByText(/Home/i)
		expect(linkElement).toBeInTheDocument()
		expect(linkElement).toHaveClass('primary')
	})

	test('renders ULink component with inverted theme', () => {
		render(
			<BrowserRouter>
				<ULink to='/about' theme={ULinkTheme.INVERTED}>
					About
				</ULink>
			</BrowserRouter>,
		)
		const linkElement = screen.getByText(/About/i)
		expect(linkElement).toBeInTheDocument()
		expect(linkElement).toHaveClass('inverted')
	})

	test('renders ULink component with custom className', () => {
		render(
			<BrowserRouter>
				<ULink to='/' className='custom-link'>
					Contact
				</ULink>
			</BrowserRouter>,
		)
		const linkElement = screen.getByText(/Contact/i)
		expect(linkElement).toBeInTheDocument()
		expect(linkElement).toHaveClass('custom-link')
	})
})
