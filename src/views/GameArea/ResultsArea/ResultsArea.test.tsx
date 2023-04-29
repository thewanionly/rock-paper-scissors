import { render, screen } from 'test'
import { MoveOption, Result } from 'types'

import { ResultTextMap, ResultsArea } from './ResultsArea'
import { RESULTS_TEXT_DELAY } from '../GameArea'
import { act } from 'react-dom/test-utils'

const mockGameContextValue = {
  playerPick: MoveOption.Paper,
  housePick: MoveOption.Rock,
  result: Result.Draw,
}

jest.mock('context', () => ({
  useGameContext: () => ({
    playerPick: mockGameContextValue.playerPick,
    housePick: mockGameContextValue.housePick,
    result: mockGameContextValue.result,
  }),
}))

describe('ResultsArea', () => {
  it(`displays user's picked option`, () => {
    render(<ResultsArea />)

    const pickedOptionChip = screen.getByTestId(`${mockGameContextValue.playerPick}-option-chip`)

    expect(pickedOptionChip).toBeInTheDocument()
  })

  it(`displays "You picked" text`, () => {
    render(<ResultsArea />)

    const userPickedText = screen.getByText(/you picked/i)

    expect(userPickedText).toBeInTheDocument()
  })

  it(`displays house picked option`, () => {
    render(<ResultsArea />)

    const pickedOptionChip = screen.getByTestId(`${mockGameContextValue.housePick}-option-chip`)

    expect(pickedOptionChip).toBeInTheDocument()
  })

  it(`displays "The house picked" text`, () => {
    render(<ResultsArea />)

    const housePickedText = screen.getByText(/the house picked/i)

    expect(housePickedText).toBeInTheDocument()
  })

  it(`displays results text`, () => {
    render(<ResultsArea />)

    const resultsText = screen.getByText(ResultTextMap[mockGameContextValue.result])

    expect(resultsText).toBeInTheDocument()
  })

  it(`displays Play Again button after ${RESULTS_TEXT_DELAY} ms`, () => {
    jest.useFakeTimers()
    render(<ResultsArea />)

    expect(screen.queryByRole('button', { name: /play again/i })).not.toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    })

    expect(screen.getByRole('button', { name: /play again/i })).toBeInTheDocument()

    jest.useRealTimers()
  })
})
