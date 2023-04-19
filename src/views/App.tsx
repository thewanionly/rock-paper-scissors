import type { ReactElement } from 'react'
import styled from 'styled-components'

import { Header } from 'views/Header'
import { GameArea } from 'views/GameArea'

const S = {
  App: styled.div``,
  AppMain: styled.main``,
}

const App = (): ReactElement => {
  return (
    <S.App>
      <Header />
      <S.AppMain>
        <GameArea />
      </S.AppMain>
    </S.App>
  )
}

export default App
