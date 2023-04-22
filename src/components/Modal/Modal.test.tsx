import { render, screen, waitFor } from 'test'

import { Modal } from './Modal'
import { IconName } from 'components/Icon'
import userEvent from '@testing-library/user-event'

describe('Modal', () => {
  it('displays Modal title', () => {
    const title = 'Title'

    render(
      <Modal title={title} onClose={() => ''}>
        Modal content
      </Modal>
    )

    const titleEl = screen.getByRole('heading', { name: new RegExp(title) })
    expect(titleEl).toBeInTheDocument()
  })

  it('displays close icon', () => {
    render(
      <Modal title="Title" onClose={() => ''}>
        Modal content
      </Modal>
    )

    const closeIcon = screen.getByLabelText(`${IconName.CLOSE} icon`)
    expect(closeIcon).toBeInTheDocument()
  })

  it('calls `onClose` prop when close icon is clicked', async () => {
    const onCloseHandler = jest.fn()
    render(
      <Modal title="Title" onClose={onCloseHandler}>
        Modal content
      </Modal>
    )

    const closeIcon = screen.getByLabelText(`${IconName.CLOSE} icon`)
    userEvent.click(closeIcon)

    await waitFor(() => expect(onCloseHandler).toHaveBeenCalled())
  })

  it('displays Modal content', () => {
    const modalContent = 'Modal content'
    render(
      <Modal title="Title" onClose={() => ''}>
        {modalContent}
      </Modal>
    )

    const modalContentContainer = screen.getByTestId('modal-content')
    const modalContentEl = screen.getByText(modalContent)

    expect(modalContentContainer).toContainElement(modalContentEl)
  })
})
