import { render, screen, waitFor } from 'test'

import { Icon, IconName } from './Icon'
import userEvent from '@testing-library/user-event'

describe('Icon', () => {
  it('displays the icon as indicated in the `name` prop', () => {
    const iconName = IconName.Paper
    render(<Icon name={iconName} />)

    const icon = screen.getByLabelText(`${iconName} icon`)

    expect(icon).toBeInTheDocument()
  })

  it('calls `onClick` prop when icon is clicked', async () => {
    const onClickHandler = jest.fn()
    const iconName = IconName.Paper
    render(<Icon name={iconName} onClick={onClickHandler} />)

    const icon = screen.getByLabelText(`${iconName} icon`)
    userEvent.click(icon)

    await waitFor(() => expect(onClickHandler).toHaveBeenCalled())
  })
})
