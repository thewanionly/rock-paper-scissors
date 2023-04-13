import styled, { css } from 'styled-components'

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

const S = {
  OptionChip: styled.div`
    width: 13rem;
    height: 13.2rem;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  OptionChipOuterCircleShadow: styled.span`
    ${outerCircle}
    background-color: ${({ theme: { colors } }) => colors.paperChipShadow};
    box-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};
  `,
  OptionChipOuterCircle: styled.span`
    ${outerCircle}
    height: 95%;
    background-color: ${({ theme: { colors } }) => colors.paperChipBg};
  `,
  OptionChipOuterCircleOverlay: styled.span`
    ${outerCircle}
    height: 95%;
    background: ${({ theme: { colors } }) =>
      `linear-gradient(180deg, ${colors.paperChipBgOverlay1} 0%, ${colors.paperChipBgOverlay2} 100%)`};
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
    color: ${({ theme: { colors } }) => colors.optionIcon};
    width: 4.8rem;
    height: 5.6rem;
  `,
}

const OptionIconmap = {
  [Option.Rock]: IconName.ROCK,
  [Option.Paper]: IconName.PAPER,
  [Option.Scissors]: IconName.SCISSORS,
} as const

type OptionChipProps = {
  option: Option
}

export const OptionChip = ({ option }: OptionChipProps) => (
  <S.OptionChip>
    <S.OptionChipOuterCircleShadow />
    <S.OptionChipOuterCircle />
    <S.OptionChipOuterCircleOverlay />
    <S.OptionChipInnerCircle>
      <S.OptionChipIcon name={OptionIconmap[option]} />
    </S.OptionChipInnerCircle>
  </S.OptionChip>
)
