// Typical Device Breakpoints taken from https://www.w3schools.com/css/css_rwd_mediaqueries.asp
// To compute em: width in px / 16
export const BREAKPOINTS = {
  mobile: '(max-width: 37.5em)', // < 600px
  tabletPortrait: '(min-width: 37.5em)', // >= 600px
  tabletLandscape: '(min-width: 48em)', // > 768px
  desktop: '(min-width: 62em)', // > 992px
  desktopLarge: '(min-width: 75em)', // > 1200px
} as const
