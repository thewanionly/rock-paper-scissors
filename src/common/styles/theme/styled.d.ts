import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryLight: string
    }
    fonts: {
      primary: string
    }
    fontSizes: {
      xs: string
      sm1: string
      sm2: string
      reg: string
      med1: string
      med2: string
      med3: string
      lg: string
      xl: string
      xxl: string
    }
    fontWeights: {
      semiBold: number
      bold: number
    }
  }
}
