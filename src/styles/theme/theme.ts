import { BREAKPOINTS, COLORS, TYPOGRAPHY } from 'styles/variables'

export const theme = {
  colors: {
    primary: COLORS.haiti,
    primaryLight: COLORS.nileBlue,

    // TODO: Add more colors here
  },
  fonts: {
    primary: TYPOGRAPHY.barlow_semi_condensed,
  },
  fontSizes: {
    xs: TYPOGRAPHY.fontSizeXs,
    sm1: TYPOGRAPHY.fontSizeSm1,
    sm2: TYPOGRAPHY.fontSizeSm2,
    reg: TYPOGRAPHY.fontSizeReg,
    med1: TYPOGRAPHY.fontSizeMed1,
    med2: TYPOGRAPHY.fontSizeMed2,
    med3: TYPOGRAPHY.fontSizeMed3,
    lg: TYPOGRAPHY.fontSizeLg,
    xl: TYPOGRAPHY.fontSizeXl,
    xxl: TYPOGRAPHY.fontSizeXxl,
  },
  fontWeights: {
    semiBold: TYPOGRAPHY.fontWeightSemiBold,
    bold: TYPOGRAPHY.fontWeightBold,
  },
  breakPoints: {
    mobile: BREAKPOINTS.mobile,
    tabletPortrait: BREAKPOINTS.tabletPortrait,
    tabletLandscape: BREAKPOINTS.tabletLandscape,
    desktop: BREAKPOINTS.desktop,
    desktopLarge: BREAKPOINTS.desktopLarge,
  },
}
