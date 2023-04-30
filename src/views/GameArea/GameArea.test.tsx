import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

import { render, screen } from 'test'
import { MoveOption, RPSOption } from 'types'
import { GameProvider } from 'context'

import { GameArea } from './GameArea'
import { HOUSE_PICK_DELAY, RESULTS_TEXT_DELAY, PLAY_AGAIN_BUTTON_DELAY } from './GameArea.constants'

const setup = () => {
  render(
    <GameProvider>
      <GameArea />
    </GameProvider>
  )
}

const rpsModeOptions = Object.values(RPSOption)

describe('GameArea', () => {
  it('displays option picker view of RPS mode by default', () => {
    setup()

    rpsModeOptions.forEach((option) => {
      expect(screen.getByRole('radio', { name: new RegExp(option) })).toBeInTheDocument()
    })
  })

  it(`displays user's picked option in results area view after user picked an option`, async () => {
    setup()

    const optionPicked = MoveOption.Rock
    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

    await userEvent.click(optionPickedEl)

    expect(screen.getByTestId(`${optionPicked}-option-chip`)).toBeInTheDocument()
  })

  it(`displays house's picked option in results area view ${HOUSE_PICK_DELAY} ms after user picked an option`, async () => {
    jest.useFakeTimers()
    setup()

    const optionPicked = MoveOption.Rock
    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

    const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    await ue.click(optionPickedEl)

    expect(screen.getAllByTestId(/option-chip/i)).toHaveLength(1)

    act(() => {
      jest.runAllTimers()
    })

    expect(screen.getAllByTestId(/option-chip/i)).toHaveLength(2)

    jest.useRealTimers()
  })

  it(`displays results text in results area view ${
    HOUSE_PICK_DELAY + RESULTS_TEXT_DELAY
  } ms after user picked an option`, async () => {
    jest.useFakeTimers()
    setup()

    const optionPicked = MoveOption.Rock
    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

    const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    await ue.click(optionPickedEl)

    expect(screen.getAllByTestId(/option-chip/i)).toHaveLength(1)
    expect(screen.queryByTestId(/results-text/i)).not.toBeInTheDocument()

    // Run first setTimeout that shows the house pick
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.queryByTestId(/results-text/i)).not.toBeInTheDocument()
    expect(screen.getAllByTestId(/option-chip/i)).toHaveLength(2)

    // Run second setTimeout that shows the results
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.getByTestId(/results-text/i)).toBeInTheDocument()

    jest.useRealTimers()
  })

  it(`displays Play Again button in results area view ${
    HOUSE_PICK_DELAY + RESULTS_TEXT_DELAY + PLAY_AGAIN_BUTTON_DELAY
  } ms after user picked an option`, async () => {
    jest.useFakeTimers()
    setup()

    const optionPicked = MoveOption.Rock
    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

    const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    await ue.click(optionPickedEl)

    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    // Run first setTimeout that shows the house pick
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    // Run second setTimeout that shows the results
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    // Run third setTimeout that shows the play again button
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.getByRole('button', { name: /play again/i })).toBeInTheDocument()

    jest.useRealTimers()
  })

  it(`displays option picker view of RPS mode after clicking Play Again button`, async () => {
    jest.useFakeTimers()
    setup()

    const optionPicked = MoveOption.Rock
    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

    const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    await ue.click(optionPickedEl)

    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    // Run first setTimeout that shows the house pick
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    // Run second setTimeout that shows the results
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    // Run third setTimeout that shows the play again button
    act(() => {
      jest.runAllTimers()
    })

    const playAgainButton = screen.getByRole('button', { name: /play again/i })
    expect(playAgainButton).toBeInTheDocument()

    await ue.click(playAgainButton)

    rpsModeOptions.forEach((option) => {
      expect(screen.getByRole('radio', { name: new RegExp(option) })).toBeInTheDocument()
    })

    jest.useRealTimers()
  })

  it(`did not retain previous state after clicking Play Again button`, async () => {
    jest.useFakeTimers()
    setup()

    const optionPicked = MoveOption.Rock
    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

    const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    await ue.click(optionPickedEl)

    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    // Run first setTimeout that shows the house pick
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    // Run second setTimeout that shows the results
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    // Run third setTimeout that shows the play again button
    act(() => {
      jest.runAllTimers()
    })

    await ue.click(screen.getByRole('button', { name: /play again/i }))

    // Click on chosen option
    const chosenOption = MoveOption.Paper
    await ue.click(screen.getByRole('radio', { name: new RegExp(chosenOption) }))

    // Check if chosen option is displayed
    expect(screen.getByTestId(`${chosenOption}-option-chip`)).toBeInTheDocument()
    // Check if house pick, results text, and play again is not yet displayed. This would mean previous state was cleared
    expect(screen.getAllByTestId(/option-chip/i)).toHaveLength(1)
    expect(screen.queryByTestId(/results-text/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    jest.useRealTimers()
  })
})
