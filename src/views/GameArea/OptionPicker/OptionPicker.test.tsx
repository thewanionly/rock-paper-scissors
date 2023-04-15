import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'test'
import { Option } from 'types'

import { OptionPicker } from './OptionPicker'

describe('OptionPicker', () => {
  it('displays 3 options: rock, paper, and scissors', () => {
    render(<OptionPicker onOptionPicked={(option) => option} />)

    const optionArray = Object.values(Option)

    optionArray.forEach((option) => {
      expect(screen.getByRole('radio', { name: new RegExp(option) })).toBeInTheDocument()
    })
  })

  it('calls the function passed in the `onOptionPicked` prop when one of the options is clicked', async () => {
    const optionPicked = Option.Paper
    const onOptionPickedHandler = jest.fn()
    render(<OptionPicker onOptionPicked={onOptionPickedHandler} />)

    const optionPickedEl = screen.getByRole('radio', { name: new RegExp(optionPicked) })
    userEvent.click(optionPickedEl)

    await waitFor(() => expect(onOptionPickedHandler).toHaveBeenCalled())
  })
})
