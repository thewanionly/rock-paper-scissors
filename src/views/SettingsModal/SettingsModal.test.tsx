import { render, screen } from 'test'

import { SettingsModal } from './SettingsModal'

describe('SettingsModal', () => {
  it('displays Settings in the title', () => {
    render(<SettingsModal />)

    const settingsTitle = screen.getByRole('heading', { name: /settings/i })
    expect(settingsTitle).toBeInTheDocument()
  })
})
