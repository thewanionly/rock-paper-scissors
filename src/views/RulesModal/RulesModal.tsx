import styled from 'styled-components'

import { useGameContext, useModalContext } from 'context'
import { Modal } from 'components'
import { Mode } from 'types'

import { ReactComponent as RPSRulesImage } from 'assets/images/rps_rules.svg'
import { ReactComponent as RPSLSRulesImage } from 'assets/images/rpsls_rules.svg'

const S = {
  RulesModal: styled(Modal)<RulesModalProps>`
    .modal-body {
      display: flex;
      justify-content: center;

      @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletPortrait} {
        padding: 0 1.8rem;
        margin-top: ${({ isLizardSpockMode }) => (!isLizardSpockMode ? '-1.2rem' : '-4rem')};
      }
    }
  `,
  RPSRulesImage: styled.div``,
}

type RulesModalProps = {
  isLizardSpockMode: boolean
}

const RulesImageMap = {
  [Mode.RockPaperScissors]: {
    component: RPSRulesImage,
    label: 'rps-rules-image',
  },
  [Mode.RockPaperScissorsLizardSpock]: {
    component: RPSLSRulesImage,
    label: 'rpsls-rules-image',
  },
}

export const RulesModal = () => {
  const { mode } = useGameContext()
  const { closeModal } = useModalContext()

  const { component, label } = RulesImageMap[mode]

  return (
    <S.RulesModal
      title="Rules"
      onClose={closeModal}
      isLizardSpockMode={mode === Mode.RockPaperScissorsLizardSpock}
    >
      <S.RPSRulesImage as={component} aria-label={label} />
    </S.RulesModal>
  )
}
