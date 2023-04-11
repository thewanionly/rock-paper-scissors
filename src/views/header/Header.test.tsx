import { render, screen } from 'test'

import { Header } from './Header'

describe('Header', () => {
  it('displays Rock, Paper, Scissors text', () => {
    render(<Header />)

    const headingText = screen.getByRole('heading', { level: 1 })

    expect(headingText).toBeInTheDocument()
    expect(headingText).toHaveTextContent(/rock paper scissors/i)
  })
})
