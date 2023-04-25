import { render, screen } from 'test'

import { SettingsModal } from './SettingsModal'

describe('SettingsModal', () => {
  it('displays Settings in the title', () => {
    render(<SettingsModal />)

    const settingsTitle = screen.getByRole('heading', { name: /settings/i })
    expect(settingsTitle).toBeInTheDocument()
  })

  it('displays Reset score label', () => {
    render(<SettingsModal />)

    const resetScoreLabel = screen.getByText(/reset score/i)
    expect(resetScoreLabel).toBeInTheDocument()
  })

  it('displays Reset score description', () => {
    render(<SettingsModal />)

    const resetScoreDescription = screen.getByText(/This will reset your score back to zero./i)
    expect(resetScoreDescription).toBeInTheDocument()
  })

  it('displays Reset score button with "Reset" as label', () => {
    render(<SettingsModal />)

    const resetButton = screen.getByRole('button', { name: /reset/i })
    expect(resetButton).toBeInTheDocument()
  })
})
