import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

import { render, screen } from 'test'
import { Option } from 'types'
import { GameProvider } from 'context'

import { GameArea, HOUSE_PICK_DELAY, RESULTS_TEXT_DELAY } from './GameArea'

const setup = () => {
  render(
    <GameProvider>
      <GameArea />
    </GameProvider>
  )
}

describe('GameArea', () => {
  it('displays option picker view by default', () => {
    setup()

    const optionArray = Object.values(Option)

    optionArray.forEach((option) => {
      expect(screen.getByRole('radio', { name: new RegExp(option) })).toBeInTheDocument()
    })
  })

  it(`displays user's picked option in results area view after user picked an option`, async () => {
    setup()

    const optionPicked = Option.Rock
    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

    await userEvent.click(optionPickedEl)

    expect(screen.getByTestId(`${optionPicked} option chip`)).toBeInTheDocument()
  })

  it(`displays house's picked option in results area view ${HOUSE_PICK_DELAY} ms after user picked an option`, async () => {
    jest.useFakeTimers()
    setup()

    const optionPicked = Option.Rock
    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

    const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    await ue.click(optionPickedEl)

    expect(screen.getAllByTestId(/option chip/i)).toHaveLength(1)

    act(() => {
      jest.runAllTimers()
    })

    expect(screen.getAllByTestId(/option chip/i)).toHaveLength(2)

    jest.useRealTimers()
  })

  it(`displays  results text in results area view ${
    HOUSE_PICK_DELAY + RESULTS_TEXT_DELAY
  } ms after user picked an option`, async () => {
    jest.useFakeTimers()
    setup()

    const optionPicked = Option.Rock
    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })

    const ue = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    await ue.click(optionPickedEl)

    expect(screen.getAllByTestId(/option chip/i)).toHaveLength(1)
    expect(screen.queryByTestId(/results text/i)).not.toBeInTheDocument()

    // Run first setTimeout that shows the house pick
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.queryByTestId(/results text/i)).not.toBeInTheDocument()
    expect(screen.getAllByTestId(/option chip/i)).toHaveLength(2)

    // Run second setTimeout that shows the results
    act(() => {
      jest.runAllTimers()
    })

    expect(screen.getByTestId(/results text/i)).toBeInTheDocument()

    jest.useRealTimers()
  })
})
