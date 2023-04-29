import styled from 'styled-components'

import { useGameContext } from 'context'
import { Mode } from 'types'

import { ScoreCard } from './ScoreCard'

const S = {
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    border: 3px solid ${({ theme: { colors } }) => colors.headerBorder};
    border-radius: 5px;
    padding: 0.9rem;
    margin: 0 auto;
    margin-top: 3.2rem;
    width: 83%;
    max-width: 40rem;
    min-width: 30rem;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      border-radius: 15px;
      padding: 1.5rem 2.1rem;
      margin-top: 4.8rem;
      max-width: 70rem;
    }
  `,
  HeaderTitle: styled.h1<HeaderTitleProps>`
    padding: 1.2rem;
    line-height: ${({ isLizardSpockMode }) => (!isLizardSpockMode ? '1.6rem' : '1rem')};
    font-size: ${({ theme: { fontSizes }, isLizardSpockMode }) =>
      !isLizardSpockMode ? fontSizes.med1 : fontSizes.sm1};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    white-space: pre-line;
    text-transform: uppercase;
    text-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};
    user-select: none;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      padding: 0.6rem 0.8rem;
      line-height: ${({ isLizardSpockMode }) => (!isLizardSpockMode ? '3.2rem' : '2rem')};
      font-size: ${({ theme: { fontSizes }, isLizardSpockMode }) =>
        !isLizardSpockMode ? fontSizes.lg : fontSizes.med2};
    }
  `,
}

type HeaderTitleProps = {
  isLizardSpockMode: boolean
}

const RPSModeTitle = () => (
  <>
    Rock{'\n'}
    Paper{'\n'}
    Scissors{'\n'}
  </>
)

const RPSLSModeTitle = () => (
  <>
    <RPSModeTitle />
    Lizard{'\n'}
    Spock{'\n'}
  </>
)

const HeaderTitleMap = {
  [Mode.RockPaperScissors]: RPSModeTitle,
  [Mode.RockPaperScissorsLizardSpock]: RPSLSModeTitle,
}

export const Header = () => {
  const { mode, score } = useGameContext()

  const HeaderTitleComponent = HeaderTitleMap[mode]

  return (
    <S.Header>
      <S.HeaderTitle isLizardSpockMode={mode === Mode.RockPaperScissorsLizardSpock}>
        <HeaderTitleComponent />
      </S.HeaderTitle>
      <ScoreCard score={score[mode]} />
    </S.Header>
  )
}
