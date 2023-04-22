import { render, screen } from 'test'

import { ScoreCard } from './ScoreCard'

describe('ScoreCard', () => {
  it('displays score label', () => {
    render(<ScoreCard />)

    const scoreLabel = screen.getByText(/score/i)
    expect(scoreLabel).toBeInTheDocument()
  })

  it('displays zero score value by default', () => {
    render(<ScoreCard />)

    const scoreValue = screen.getByTestId('score-value')
    expect(scoreValue.textContent).toBe('0')
  })

  it('takes the score prop and display it in the score value', () => {
    const score = 5
    render(<ScoreCard score={score} />)

    const scoreValue = screen.getByTestId('score-value')
    expect(scoreValue.textContent).toBe(`${score}`)
  })
})
