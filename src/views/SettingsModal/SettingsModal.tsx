import { useModalContext } from 'context'
import { Modal } from 'components'

export const SettingsModal = () => {
  const { closeModal } = useModalContext()

  return (
    <Modal title="Settings" onClose={closeModal}>
      test
    </Modal>
  )
}
