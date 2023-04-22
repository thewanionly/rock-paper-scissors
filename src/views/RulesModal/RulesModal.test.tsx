import { render, screen } from 'test'

import { RulesModal } from './RulesModal'

describe('RulesModal', () => {
  it('displays Rules in the title', () => {
    render(<RulesModal />)

    const rulesTitle = screen.getByRole('heading', { name: /rules/i })
    expect(rulesTitle).toBeInTheDocument()
  })

  it('displays the game rules in the body', () => {
    render(<RulesModal />)

    const rpsRules = screen.getByLabelText('rps-rules-image')
    expect(rpsRules).toBeInTheDocument()
  })
})
