import { render, screen } from 'test'

import { Footer } from './Footer'

describe('Footer', () => {
  it('displays Rules button', () => {
    render(<Footer />)

    const rulesButton = screen.getByRole('button', { name: /rules/i })
    expect(rulesButton).toBeInTheDocument()
  })
})
