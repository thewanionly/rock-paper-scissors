import { ModalName, useModalContext } from 'context'
import { Header } from 'views/Header'
import { GameArea } from 'views/GameArea'
import { Footer } from 'views/Footer'

import { RulesModal } from './RulesModal'

const ModalMap = {
  [ModalName.Rules]: RulesModal,
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
