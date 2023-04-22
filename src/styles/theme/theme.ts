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

    optionChipOuterCircleOverlay1: rgba(COLORS.white, 0.0966455),
    optionChipOuterCircleOverlay2: rgba(COLORS.white, 0.0001),
    optionChipInnerCircleShadow: COLORS.blueHaze,
    optionChipInnerCircleBg1: COLORS.aquaHaze,
    optionChipInnerCircleBg2: COLORS.lightGrey,
    optionChipIcon: COLORS.gunPowder,

    rockChipShadow: COLORS.vividBurgundy,
    rockChipBg: COLORS.amaranth,

    paperChipShadow: COLORS.ceruleanBlue,
    paperChipBg: COLORS.ultramarineBlue,

    scissorsChipShadow: COLORS.cocoaBrown,
    scissorsChipBg: COLORS.schoolBusYellow,

    optionPickerItemHover: rgba(COLORS.white, 0.05),

    resultsOptionChipPlaceholderBg: rgba(COLORS.black, 0.1),
    resultsPickedText: COLORS.white,
    resultsGameResultsText: COLORS.white,

    buttonContainedText: COLORS.gunPowder,
    buttonContainedTextHover: COLORS.amaranth,
    buttonContainedBg1: COLORS.aquaHaze,
    buttonContainedBg2: COLORS.white,
    buttonOutlinedText: COLORS.white,
    buttonOutlinedTextHover: COLORS.gunPowder,
    buttonOutlinedBorder: COLORS.white,

    modalBg: COLORS.white,
    modalTitle: COLORS.gunPowder,
    modalCloseButton: rgba(COLORS.gunPowder, 0.25),
    modalCloseButtonHover: COLORS.gunPowder,
    modalOverlay: rgba(COLORS.black, 0.5),
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
