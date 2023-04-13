import { rgba } from 'polished'
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from 'styles/variables'

export const theme = {
  colors: {
    bgPrimary: COLORS.haiti,
    bgPrimaryLight: COLORS.nileBlue,

    textPrimary: COLORS.white,
    headerBorder: rgba(COLORS.white, 0.289199),

    boxShadowPrimary: rgba(COLORS.black, 0.196706),

    scoreCardBg: COLORS.aquaHaze,
    scoreCardBgLight: COLORS.white,
    scoreLabelText: COLORS.ceruleanBlue,
    scoreValueText: COLORS.davyGrey,

    optionChipInnerCircleShadow: COLORS.blueHaze,
    optionChipInnerCircleBg1: COLORS.aquaHaze,
    optionChipInnerCircleBg2: COLORS.lightGrey,

    paperChipShadow: COLORS.ceruleanBlue,
    paperChipBg: COLORS.ultramarineBlue,
    paperChipBgOverlay1: rgba(COLORS.white, 0.0966455),
    paperChipBgOverlay2: rgba(COLORS.white, 0.0001),

    optionIcon: COLORS.gunPowder,
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
