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
})
