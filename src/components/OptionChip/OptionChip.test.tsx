import { render, screen } from 'test'

import { OptionChip } from './OptionChip'
import { Option } from 'types'

describe('OptionChip', () => {
  it('displays appropriate icon based on option', () => {
    render(<OptionChip option={Option.Paper} />)

    const paperIcon = screen.getByRole('img', { name: Option.Paper })

    expect(paperIcon).toBeInTheDocument()
  })
})
