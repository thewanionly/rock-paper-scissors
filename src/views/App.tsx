import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import { ModalName, useModalContext } from 'context'
import { Header } from 'views/Header'
import { GameArea } from 'views/GameArea'
import { Footer } from 'views/Footer'

import { RulesModal } from './RulesModal'
import { SettingsModal } from './SettingsModal'

const S = {
  ModalOpenIndicator: styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
  `,
}

const ModalMap = {
  [ModalName.Rules]: RulesModal,
  [ModalName.Settings]: SettingsModal,
}

const App = () => {
  const { modal } = useModalContext()

  const ModalComponent = modal ? ModalMap[modal] : null

  return (
    <>
      <AnimatePresence>
        {ModalComponent && <ModalComponent key="modal_component" />}
      </AnimatePresence>
      {ModalComponent && <S.ModalOpenIndicator data-testid={`${modal}-modal-open-indicator`} />}
      <Header />
      <GameArea />
      <Footer />
    </>
  )
}

export default App
