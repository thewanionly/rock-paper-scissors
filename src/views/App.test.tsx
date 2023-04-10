import { render, screen } from 'test'
import App from './App'

describe('App', () => {
  it('displays Rock, Paper, Scissors text', () => {
    render(<App />)

    const rockPaperScissorsText = screen.getByRole('heading', { name: /rock paper scissors/i })

    expect(rockPaperScissorsText).toBeInTheDocument()
  })
})
