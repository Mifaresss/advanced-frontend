import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
	test('Clean sidebar component', () => {
		render(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})

	test('Toggle sidebar component', () => {
		render(<Sidebar />)
		const toggleBtn = screen.getByTestId('toggle')
		fireEvent.click(toggleBtn)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})
