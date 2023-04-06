import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%

    & * {
      font-family: ${({ theme: { fonts } }) => fonts.primary};
      font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
    }
  }
`
