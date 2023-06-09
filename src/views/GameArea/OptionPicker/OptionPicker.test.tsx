import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'test'
import { Mode, MoveOption, RPSOption } from 'types'

import { OptionPicker } from './OptionPicker'

describe('OptionPicker', () => {
  it('displays 3 options (rock, paper, and scissors) by default mode (RPS mode)', () => {
    render(<OptionPicker onOptionPicked={(option) => option} />)

    const optionArray = Object.values(RPSOption)

    optionArray.forEach((option) => {
      expect(screen.getByRole('radio', { name: new RegExp(option) })).toBeInTheDocument()
    })
  })

  it('displays 5 options (rock, paper, scissors, lizard, and spock) when mode is "lizard-spock"', () => {
    render(
      <OptionPicker mode={Mode.RockPaperScissorsLizardSpock} onOptionPicked={(option) => option} />
    )

    const optionArray = Object.values(MoveOption)

    optionArray.forEach((option) => {
      expect(screen.getByRole('radio', { name: new RegExp(option) })).toBeInTheDocument()
    })
  })

  it('calls the function passed in the `onOptionPicked` prop when one of the options is clicked', async () => {
    const optionPicked = MoveOption.Paper
    const onOptionPickedHandler = jest.fn()
    render(<OptionPicker onOptionPicked={onOptionPickedHandler} />)

    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })
    userEvent.click(optionPickedEl)

    await waitFor(() => expect(onOptionPickedHandler).toHaveBeenCalled())
  })
})
