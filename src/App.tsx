import type { ReactElement } from 'react'
import styled from 'styled-components'

const S = {
  App: styled.main`
    display: flex;
    justify-content: center;
  `,
}

const App = (): ReactElement => {
  return (
    <S.App>
      <h1>Rock Paper Scissors</h1>
    </S.App>
  )
}

export default App
