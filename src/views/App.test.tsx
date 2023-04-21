import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

import { render, screen } from 'test'
import { Option } from 'types'
import { GameProvider } from 'context'

import App from './App'
import { HOUSE_PICK_DELAY, RESULTS_TEXT_DELAY } from './GameArea'

const mockPlayerPick = Option.Paper

// mock house pick to Rock, so result would make player win and will update the score
jest.mock('views/GameArea/services/pickHouseOption', () => ({
  pickHouseOption: () => Option.Rock,
}))

const setup = () => {
  render(
    <GameProvider>
      <App />
    </GameProvider>
  )
}

describe('App', () => {
  it('displays header', () => {
    setup()

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('displays game area', () => {
    setup()

    const gameArea = screen.getByTestId('game area')
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
})
