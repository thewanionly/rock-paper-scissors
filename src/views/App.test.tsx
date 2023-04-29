import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

import { render, screen } from 'test'
import { MoveOption, RPSOption } from 'types'
import { GameProvider, ModalProvider } from 'context'

import App from './App'
import { HOUSE_PICK_DELAY, RESULTS_TEXT_DELAY } from './GameArea'
import { IconName } from 'components'

const mockPlayerPick = MoveOption.Paper

// mock house pick to Rock, so result would make player win and will update the score
jest.mock('views/GameArea/services/pickHouseOption', () => ({
  pickHouseOption: () => MoveOption.Rock,
}))

const setup = () => {
  return render(
    <GameProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </GameProvider>
  )
}

beforeEach(() => {
  localStorage.clear()
  window.scrollTo = jest.fn()
})

describe('App', () => {
  describe('Layout', () => {
    it('displays header', () => {
      setup()

      const header = screen.getByRole('banner')
      expect(header).toBeInTheDocument()
    })

    it('displays game area', () => {
      setup()

      const gameArea = screen.getByTestId('game-area')
      expect(gameArea).toBeInTheDocument()
    })

    it('displays footer', () => {
      setup()

      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
    })
  })

  describe('Update score', () => {
    it(`displays updated score ${
      HOUSE_PICK_DELAY + RESULTS_TEXT_DELAY
    } ms after user picked an option`, async () => {
      jest.useFakeTimers()
      setup()

      const optionPicked = mockPlayerPick
      const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      await ue.click(optionPickedEl)

      // Run first setTimeout that shows the house pick
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      // Run second setTimeout that shows the results
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('1')

      jest.useRealTimers()
    })

    it(`retains previous score after clicking on Play Again button`, async () => {
      jest.useFakeTimers()
      setup()

      const optionPicked = mockPlayerPick
      const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      await ue.click(optionPickedEl)

      // Run first setTimeout that shows the house pick
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      // Run second setTimeout that shows the results
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('1')

      // Run third setTimeout that shows the play again button
      act(() => {
        jest.runAllTimers()
      })

      await ue.click(screen.getByRole('button', { name: /play again/i }))

      expect(screen.getByTestId('score-value').textContent).toBe('1')

      jest.useRealTimers()
    })

    it(`retains previous score even after remounting the application`, async () => {
      jest.useFakeTimers()
      const { unmount } = setup()

      const optionPicked = mockPlayerPick
      const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      await ue.click(optionPickedEl)

      // Run first setTimeout that shows the house pick
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      // Run second setTimeout that shows the results
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('1')

      // Unmount component
      unmount()

      // Re-mount component
      setup()

      // Check if score is persisted
      expect(screen.getByTestId('score-value').textContent).toBe('1')

      jest.useRealTimers()
    })

    it(`increments to the current score after clicking on Play Again button then clicked on a new option and won`, async () => {
      jest.useFakeTimers()
      setup()

      const optionPicked = mockPlayerPick
      const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      await ue.click(optionPickedEl)

      // Run first setTimeout that shows the house pick
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      // Run second setTimeout that shows the results
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('1')

      // Run third setTimeout that shows the play again button
      act(() => {
        jest.runAllTimers()
      })

      await ue.click(screen.getByRole('button', { name: /play again/i }))

      expect(screen.getByTestId('score-value').textContent).toBe('1')

      // Click on an option again
      await ue.click(screen.getByRole('radio', { name: new RegExp(optionPicked) }))

      // Run  first setTimeout that shows the house pick
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('1')

      // Run second setTimeout that shows the results
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('2')

      jest.useRealTimers()
    })
  })

  describe('Rules modal', () => {
    it('opens Rules modal when Rules button is clicked', async () => {
      setup()

      const rulesButton = screen.getByRole('button', { name: /rules/i })
      await userEvent.click(rulesButton)

      expect(screen.getByRole('heading', { name: /rules/i })).toBeInTheDocument()
    })

    it('closes Rules modal when close button in Rules modal is clicked', async () => {
      setup()

      const rulesButton = screen.getByRole('button', { name: /rules/i })
      await userEvent.click(rulesButton)

      expect(screen.getByRole('heading', { name: /rules/i })).toBeInTheDocument()

      const closeIcon = screen.getByLabelText(`${IconName.CLOSE} icon`)
      await userEvent.click(closeIcon)

      expect(screen.queryByRole('heading', { name: /rules/i })).not.toBeInTheDocument()
    })
  })

  describe('Settings modal', () => {
    it('opens Settings modal when Settings icon is clicked', async () => {
      setup()

      const settingsIcon = screen.getByLabelText('settings icon')
      await userEvent.click(settingsIcon)

      expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()
    })

    it('closes Settings modal when close button in Settings modal is clicked', async () => {
      setup()

      const settingsIcon = screen.getByLabelText('settings icon')
      await userEvent.click(settingsIcon)

      expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()

      const closeIcon = screen.getByLabelText(`${IconName.CLOSE} icon`)
      await userEvent.click(closeIcon)

      expect(screen.queryByRole('heading', { name: /settings/i })).not.toBeInTheDocument()
    })
  })

  describe('Reset score', () => {
    it('closes Settings modal when Reset score button is clicked', async () => {
      setup()

      const settingsIcon = screen.getByLabelText('settings icon')
      await userEvent.click(settingsIcon)

      expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()

      const resetButton = screen.getByRole('button', { name: /reset/i })
      await userEvent.click(resetButton)

      expect(screen.queryByRole('heading', { name: /settings/i })).not.toBeInTheDocument()
    })

    it('resets the score to 0 when Reset score button is clicked', async () => {
      jest.useFakeTimers()
      setup()

      const optionPicked = mockPlayerPick
      const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      await ue.click(optionPickedEl)

      // Run first setTimeout that shows the house pick
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      // Run second setTimeout that shows the results
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('1')

      const settingsIcon = screen.getByLabelText('settings icon')
      await ue.click(settingsIcon)

      expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()

      const resetButton = screen.getByRole('button', { name: /reset/i })
      await ue.click(resetButton)

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      jest.useRealTimers()
    })
  })

  describe('Lizard-Spock mode', () => {
    it('displays 5 options (rock, paper, scirors, lizard, spock) in option picker when Lizard-Spock mode switch is enabled', async () => {
      setup()

      // Assert on default options (rock, paper, scirrors)
      Object.values(RPSOption).forEach((option) => {
        expect(screen.getByRole('radio', { name: new RegExp(option) })).toBeInTheDocument()
      })

      // Open Settings modal
      await userEvent.click(screen.getByLabelText('settings icon'))

      // Enable Lizard-Spock mode
      await userEvent.click(screen.getByTestId('lizard-spock-switch'))

      // Close Settings modal
      await userEvent.click(screen.getByLabelText(`${IconName.CLOSE} icon`))

      // Assert on new options (rock, paper, scissors, lizard, spock)
      Object.values(MoveOption).forEach((option) => {
        expect(screen.getByRole('radio', { name: new RegExp(option) })).toBeInTheDocument()
      })
    })

    it('changes view to option picker view when Lizard-Spock mode switch is enabled', async () => {
      jest.useFakeTimers()
      setup()
      const optionPick = mockPlayerPick
      const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

      // Click on an option
      await ue.click(screen.getByRole('radio', { name: new RegExp(optionPick) }))

      // Run first setTimeout that shows the house pick
      act(() => {
        jest.runAllTimers()
      })

      // Assert on changing the view to results area
      expect(screen.getByText('You picked')).toBeInTheDocument()

      // Open Settings modal
      await ue.click(screen.getByLabelText('settings icon'))

      // Enable Lizard-Spock mode
      await ue.click(screen.getByTestId('lizard-spock-switch'))

      // Close Settings modal
      await ue.click(screen.getByLabelText(`${IconName.CLOSE} icon`))

      // Assert that results area is not shown anymore
      expect(screen.queryByText('You picked')).not.toBeInTheDocument()

      // Assert that view has changed back to option picker
      Object.values(MoveOption).forEach((option) => {
        expect(screen.getByRole('radio', { name: new RegExp(option) })).toBeInTheDocument()
      })

      jest.useRealTimers()
    })

    it('resets the score to 0 when Lizard-Spock mode switch is enabled', async () => {
      jest.useFakeTimers()
      setup()

      const optionPicked = mockPlayerPick
      const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      await ue.click(optionPickedEl)

      // Run first setTimeout that shows the house pick
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      // Run second setTimeout that shows the results
      act(() => {
        jest.runAllTimers()
      })

      expect(screen.getByTestId('score-value').textContent).toBe('1')

      const settingsIcon = screen.getByLabelText('settings icon')
      await ue.click(settingsIcon)

      expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()

      const lizardSpockModeSwitch = screen.getByTestId('lizard-spock-switch')
      await ue.click(lizardSpockModeSwitch)

      expect(screen.getByTestId('score-value').textContent).toBe('0')

      jest.useRealTimers()
    })

    it('persists the Lizard-spock mode switch state after closing Settings modal modal', async () => {
      setup()

      // Open Settings modal
      await userEvent.click(screen.getByLabelText('settings icon'))

      expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()
      expect(screen.getByRole('checkbox')).not.toBeChecked()

      // Enable Lizard-Spock mode
      await userEvent.click(screen.getByTestId('lizard-spock-switch'))

      expect(screen.getByRole('checkbox')).toBeChecked()

      // Close Settings modal
      await userEvent.click(screen.getByLabelText(`${IconName.CLOSE} icon`))

      // Open Settings modal again
      await userEvent.click(screen.getByLabelText('settings icon'))

      expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()
      expect(screen.getByRole('checkbox')).toBeChecked()
    })

    it('updates header text to "rock paper scissors lizard spock" after enabling "lizard-spock" mode', async () => {
      setup()

      // Assert on default header text
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/rock paper scissors/i)

      // Open Settings modal
      await userEvent.click(screen.getByLabelText('settings icon'))

      // Enable Lizard-Spock mode
      await userEvent.click(screen.getByTestId('lizard-spock-switch'))

      // Close Settings modal
      await userEvent.click(screen.getByLabelText(`${IconName.CLOSE} icon`))

      // Assert on new header text
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        /rock paper scissors lizard spock/i
      )
    })

    it('updates game rules in rules modal to include lizard and spock after enabling "lizard-spock" mode', async () => {
      setup()

      // Open Rules modal
      await userEvent.click(screen.getByRole('button', { name: /rules/i }))

      // Assert on default rules image
      expect(screen.getByLabelText('rps-rules-image')).toBeInTheDocument()

      // Close Rules modal
      await userEvent.click(screen.getByLabelText(`${IconName.CLOSE} icon`))

      // Open Settings modal
      await userEvent.click(screen.getByLabelText('settings icon'))

      // Enable Lizard-Spock mode
      await userEvent.click(screen.getByTestId('lizard-spock-switch'))

      // Close Settings modal
      await userEvent.click(screen.getByLabelText(`${IconName.CLOSE} icon`))

      // Open Rules modal
      await userEvent.click(screen.getByRole('button', { name: /rules/i }))

      // Assert on new rules image
      expect(screen.getByLabelText('rpsls-rules-image')).toBeInTheDocument()
    })
  })
})
