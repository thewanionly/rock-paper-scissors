import styled from 'styled-components'

import { useModalContext } from 'context'
import { Modal } from 'components'
import { ReactComponent as RPSRulesImage } from 'assets/images/rps_rules.svg'

const S = {
  RulesModal: styled(Modal)`
    .modal-body {
      display: flex;
      justify-content: center;

      @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
        padding: 0 1.8rem;
      }
    }
  `,
  RPSRulesImage: styled.div``,
}

export const RulesModal = () => {
  const { closeModal } = useModalContext()

  return (
    <S.RulesModal title="Rules" onClose={closeModal}>
      <S.RPSRulesImage as={RPSRulesImage} aria-label="rps-rules-image" />
    </S.RulesModal>
  )
}
