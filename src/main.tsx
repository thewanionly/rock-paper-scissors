import React from 'react'
import ReactDOM from 'react-dom/client'

import App from 'views/App'
import { GlobalStyles, Theme } from 'styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </React.StrictMode>
)
