import userEvent from '@testing-library/user-event'

import { render, screen } from 'test'
import { Switch } from './Switch'

describe('Switch', () => {
  it('displays Switch component', () => {
    render(<Switch />)

    const switchEl = screen.getByTestId('switch')
    expect(switchEl).toBeInTheDocument()
  })

  it('displays off state by default', () => {
    render(<Switch />)

    const switchCheckbox = screen.getByRole('checkbox')
    expect(switchCheckbox).not.toBeChecked()
  })

  it('displays on state by default when checked prop is true', () => {
    render(<Switch checked />)

    const switchCheckbox = screen.getByRole('checkbox')
    expect(switchCheckbox).toBeChecked()
  })

  it('displays on state when Switch component is clicked', async () => {
    render(<Switch />)

    const switchEl = screen.getByTestId('switch')
    await userEvent.click(switchEl)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('calls the function passed in the onChange prop ', async () => {
    const onChangeHandler = jest.fn()
    render(<Switch onChange={onChangeHandler} />)

    const switchEl = screen.getByTestId('switch')
    await userEvent.click(switchEl)

    expect(onChangeHandler).toHaveBeenCalled()
  })
})
