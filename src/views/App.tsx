import { ModalName, useModalContext } from 'context'
import { Header } from 'views/Header'
import { GameArea } from 'views/GameArea'
import { Footer } from 'views/Footer'

import { RulesModal } from './RulesModal'
import { SettingsModal } from './SettingsModal'

const ModalMap = {
  [ModalName.Rules]: RulesModal,
  [ModalName.Settings]: SettingsModal,
}

const App = () => {
  const { modal } = useModalContext()

  const ModalComponent = modal ? ModalMap[modal] : null

  return (
    <>
      {ModalComponent && <ModalComponent />}
      <Header />
      <GameArea />
      <Footer />
    </>
  )
}

export default App
