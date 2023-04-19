import { render, screen } from 'test'
import { Option } from 'types'

import { GameArea } from './GameArea'

describe('GameArea', () => {
  it(`displays user's picked option`, () => {
    render(<GameArea />)
  })
})
