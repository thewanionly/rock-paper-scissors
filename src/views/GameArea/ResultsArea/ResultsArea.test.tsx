import { render, screen } from 'test'
import { Option, Result } from 'types'

import { ResultTextMap, ResultsArea } from './ResultsArea'

const mockGameContextValue = {
  playerPick: Option.Paper,
  housePick: Option.Rock,
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

    const pickedOptionChip = screen.getByTestId(`${mockGameContextValue.playerPick} option chip`)

    expect(pickedOptionChip).toBeInTheDocument()
  })

  it(`displays "You picked" text`, () => {
    render(<ResultsArea />)

    const userPickedText = screen.getByText(/you picked/i)

    expect(userPickedText).toBeInTheDocument()
  })

  it(`displays house picked option`, () => {
    render(<ResultsArea />)

    const pickedOptionChip = screen.getByTestId(`${mockGameContextValue.housePick} option chip`)

    expect(pickedOptionChip).toBeInTheDocument()
  })

  it(`displays "The house picked" text`, () => {
    render(<ResultsArea />)

    const housePickedText = screen.getByText(/the house picked/i)

    expect(housePickedText).toBeInTheDocument()
  })

  it(`displays the results`, () => {
    render(<ResultsArea />)

    const resultsText = screen.getByText(ResultTextMap[mockGameContextValue.result])

    expect(resultsText).toBeInTheDocument()
  })
})
