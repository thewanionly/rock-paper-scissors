import type { ReactElement } from 'react'
import styled from 'styled-components'

import { Header } from 'views/header'

const S = {
  App: styled.main`
    display: flex;
    justify-content: center;
  `,
}

const App = (): ReactElement => {
  return (
    <S.App>
      <Header />
    </S.App>
  )
}

export default App
