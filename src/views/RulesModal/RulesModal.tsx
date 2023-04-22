import styled from 'styled-components'

import { Modal } from 'components'
import { ReactComponent as RPSRulesImage } from 'assets/images/rps_rules.svg'

const S = {
  RPSRulesImage: styled.div``,
}

export const RulesModal = () => {
  return (
    <Modal title="Rules" onClose={() => console.log('closing rules modal')}>
      <S.RPSRulesImage as={RPSRulesImage} aria-label="rps-rules-image" />
    </Modal>
  )
}
