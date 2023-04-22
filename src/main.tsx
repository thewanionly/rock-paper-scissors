import React from 'react'
import ReactDOM from 'react-dom/client'

import App from 'views/App'
import { GlobalStyles, Theme } from 'styles'
import { GameProvider, ModalProvider } from 'context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <GameProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </GameProvider>
    </Theme>
  </React.StrictMode>
)
