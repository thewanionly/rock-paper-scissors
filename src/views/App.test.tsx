import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

import { render, screen } from 'test'
import { Option } from 'types'
import { GameProvider, ModalProvider } from 'context'

import App from './App'
import { HOUSE_PICK_DELAY, RESULTS_TEXT_DELAY } from './GameArea'
import { IconName } from 'components'

const mockPlayerPick = Option.Paper

// mock house pick to Rock, so result would make player win and will update the score
jest.mock('views/GameArea/services/pickHouseOption', () => ({
  pickHouseOption: () => Option.Rock,
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
})

describe('App', () => {
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

  it('displays footer', () => {
    setup()

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

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
