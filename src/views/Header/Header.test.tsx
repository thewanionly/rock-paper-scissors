import { render, screen } from 'test'

import { Header } from './Header'

describe('Header', () => {
  it('displays header text', () => {
    render(<Header />)

    const headingText = screen.getByRole('heading', { level: 1 })

    expect(headingText).toBeInTheDocument()
    expect(headingText).toHaveTextContent(/rock paper scissors/i)
  })

  it('displays Score label', () => {
    render(<Header />)

    const scoreLabel = screen.getByText(/score/i)

    expect(scoreLabel).toBeInTheDocument()
  })

  it('displays Score value', () => {
    render(<Header />)

    const scoreValue = screen.getByTestId('score-value')

    expect(scoreValue.textContent).toBe('0')
  })
})
