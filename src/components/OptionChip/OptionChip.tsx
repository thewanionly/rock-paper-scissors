import styled, { DefaultTheme, css } from 'styled-components'

import { Icon, IconName } from 'components/Icon'
import { Option } from 'types'

const outerCircle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

const outerCircleBg = (theme: DefaultTheme, option: Option, isShadow?: boolean) =>
  ({
    [Option.Paper]: css`
      background-color: ${isShadow ? theme.colors.paperChipShadow : theme.colors.paperChipBg};
    `,
    [Option.Rock]: css`
      background-color: ${isShadow ? theme.colors.rockChipShadow : theme.colors.rockChipBg};
    `,
    [Option.Scissors]: css`
      background-color: ${isShadow ? theme.colors.scissorsChipShadow : theme.colors.scissorsChipBg};
    `,
  }[option])

const S = {
  OptionChip: styled.div`
    width: 13rem;
    height: 13.2rem;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      width: 19.8rem;
      height: 20.3rem;
    }
  `,
  OptionChipOuterCircleShadow: styled.span<OptionChipOuterCircleProps>`
    ${outerCircle}

    box-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};
    ${({ theme, option }) => outerCircleBg(theme, option, true)}
  `,
  OptionChipOuterCircle: styled.span<OptionChipOuterCircleProps>`
    ${outerCircle}

    height: 95%;
    ${({ theme, option }) => outerCircleBg(theme, option)}
  `,
  OptionChipOuterCircleOverlay: styled.span`
    ${outerCircle}
    height: 95%;
    background: ${({ theme: { colors } }) =>
      `linear-gradient(180deg, ${colors.optionChipOuterCircleOverlay1} 0%, ${colors.optionChipOuterCircleOverlay2} 100%)`};
  `,
  OptionChipInnerCircle: styled.span`
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 76%;
    height: 75%;
    border-radius: 50%;
    background: ${({ theme: { colors } }) =>
      `linear-gradient(0deg, ${colors.optionChipInnerCircleBg1} 0%, ${colors.optionChipInnerCircleBg2} 98.34%)`};
    box-shadow: inset 0px 5.23px 0px
      ${({ theme: { colors } }) => colors.optionChipInnerCircleShadow};
  `,
  OptionChipIcon: styled(Icon)`
    color: ${({ theme: { colors } }) => colors.optionChipIcon};
    width: 4.8rem;
    height: 5.6rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      width: 7.2rem;
      height: 8.6rem;
    }
  `,
}

const OptionIconmap = {
  [Option.Rock]: IconName.ROCK,
  [Option.Paper]: IconName.PAPER,
  [Option.Scissors]: IconName.SCISSORS,
} as const

type OptionChipProps = {
  className?: string
  option: Option
}

type OptionChipOuterCircleProps = {
  option: Option
}

export const OptionChip = ({ className = '', option }: OptionChipProps) => (
  <S.OptionChip className={className} data-testid={`${option} option chip`}>
    <S.OptionChipOuterCircleShadow option={option} data-testid="outer circle shadow" />
    <S.OptionChipOuterCircle option={option} data-testid="outer circle" />
    <S.OptionChipOuterCircleOverlay />
    <S.OptionChipInnerCircle>
      <S.OptionChipIcon name={OptionIconmap[option]} />
    </S.OptionChipInnerCircle>
  </S.OptionChip>
)
