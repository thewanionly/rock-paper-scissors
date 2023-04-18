import { render, screen } from 'test'
import { Option } from 'types'

import { ResultsArea } from './ResultsArea'

const mockedPlayerPick = Option.Paper

jest.mock('context', () => ({
  useGameContext: () => ({
    playerPick: mockedPlayerPick,
  }),
}))

describe('ResultsArea', () => {
  it(`displays user's picked option`, () => {
    render(<ResultsArea />)

    const pickedOptionChip = screen.getByTestId(`${mockedPlayerPick} option chip`)

    expect(pickedOptionChip).toBeInTheDocument()
  })

  it(`displays "You picked" text`, () => {
    render(<ResultsArea />)

    const userPickedText = screen.getByText(/you picked/i)

    expect(userPickedText).toBeInTheDocument()
  })

  it(`displays "The house picked" text`, () => {
    render(<ResultsArea />)

    const housePickedText = screen.getByText(/the house picked/i)

    expect(housePickedText).toBeInTheDocument()
  })
})
