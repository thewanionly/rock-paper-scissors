import styled from 'styled-components'

import { useModalContext } from 'context'
import { Modal } from 'components'
import { ReactComponent as RPSRulesImage } from 'assets/images/rps_rules.svg'

const S = {
  RPSRulesImage: styled.div``,
}

export const RulesModal = () => {
  const { closeModal } = useModalContext()

  return (
    <Modal title="Rules" onClose={closeModal}>
      <S.RPSRulesImage as={RPSRulesImage} aria-label="rps-rules-image" />
    </Modal>
  )
}
