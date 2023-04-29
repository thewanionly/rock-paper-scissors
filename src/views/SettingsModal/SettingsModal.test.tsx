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

    const resetScoreDescription = screen.getByText(
      /This will reset your current mode's score back to zero./i
    )
    expect(resetScoreDescription).toBeInTheDocument()
  })

  it('displays Reset score button with "Reset" as label', () => {
    render(<SettingsModal />)

    const resetButton = screen.getByRole('button', { name: /reset/i })
    expect(resetButton).toBeInTheDocument()
  })

  it('displays Lizard-Spock mode label', () => {
    render(<SettingsModal />)

    const lizardSpockMode = screen.getByText(/"lizard-spock" mode/i)
    expect(lizardSpockMode).toBeInTheDocument()
  })

  it('displays Lizard-Spock mode description', () => {
    render(<SettingsModal />)

    const lizardSpockModeDescription = screen.getByText(
      /Enabling this will change the game mode to "lizard-spock". This will still persist your scores in all game modes./i
    )
    expect(lizardSpockModeDescription).toBeInTheDocument()
  })

  it('displays Lizard-Spock mode toggle switch', () => {
    render(<SettingsModal />)

    const lizardSpockModeSwitch = screen.getByTestId('lizard-spock-switch')
    expect(lizardSpockModeSwitch).toBeInTheDocument()
  })
})
