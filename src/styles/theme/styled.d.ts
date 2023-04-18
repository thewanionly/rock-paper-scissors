import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgPrimary: string
      bgPrimaryLight: string
      textPrimary: string
      headerBorder: string
      boxShadowPrimary: string
      scoreCardBg: string
      scoreCardBgLight: string
      scoreLabelText: string
      scoreValueText: string
      optionChipOuterCircleOverlay1: string
      optionChipOuterCircleOverlay2: string
      optionChipInnerCircleShadow: string
      optionChipInnerCircleBg1: string
      optionChipInnerCircleBg2: string
      optionChipIcon: string
      rockChipShadow: string
      rockChipBg: string
      paperChipShadow: string
      paperChipBg: string
      scissorsChipShadow: string
      scissorsChipBg: string
      optionPickerItemHover: string
      resultsOptionChipPlaceholderBg: string
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
    breakPoints: {
      mobile: string
      tabletPortrait: string
      tabletLandscape: string
      desktop: string
      desktopLarge: string
    }
  }
}
