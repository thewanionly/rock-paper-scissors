import { render, screen } from 'test'

import { Footer } from './Footer'
import { IconName } from 'components'

describe('Footer', () => {
  it('displays Rules button', () => {
    render(<Footer />)

    const rulesButton = screen.getByRole('button', { name: /rules/i })
    expect(rulesButton).toBeInTheDocument()
  })

  it('displays Settings icon', () => {
    const iconName = IconName.Settings
    render(<Footer />)

    const settingsIcon = screen.getByLabelText(`${iconName} icon`)
    expect(settingsIcon).toBeInTheDocument()
  })
})
