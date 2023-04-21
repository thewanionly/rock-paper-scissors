import styled, { css } from 'styled-components'

import { Button, OptionChip } from 'components'
import { useGameContext } from 'context'
import { Result } from 'types'
import { useEffect, useState } from 'react'
import { PLAY_AGAIN_BUTTON_DELAY } from '../GameArea'

const pickContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;

  @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
    gap: 6.3rem;
  }
`

const S = {
  ResultsArea: styled.div`
    display: grid;
    grid-template-areas:
      'player-picked house-picked'
      'results results';
    column-gap: 4rem;
    row-gap: 6rem;
    justify-content: space-between;

    max-width: 40rem;
    min-width: 32rem;
    width: 80%;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      row-gap: 8rem;

      min-width: 70rem;
      max-width: none;
      width: max-content;
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      grid-template-areas: 'player-picked results house-picked';
      column-gap: 8rem;
      align-items: center;
    }
  `,
  PlayerPickContainer: styled.div`
    ${pickContainer}

    grid-area: player-picked;
  `,
  HousePickContainer: styled.div`
    ${pickContainer}

    grid-area: house-picked;
  `,
  OptionChipContainer: styled.div`
    width: 13rem;
    height: 13.3rem;
    display: grid;
    align-items: center;
    justify-items: center;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      width: 29.3rem;
      height: 30rem;
    }

    &::before {
      content: '';
      grid-column: 1;
      grid-row: 1;
      background-color: ${({ theme: { colors } }) => colors.resultsOptionChipPlaceholderBg};
      border-radius: 50%;
      width: 11rem;
      height: 11rem;

      @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
        width: 22.5rem;
        height: 22.5rem;
      }
    }
  `,
  OptionChip: styled(OptionChip)`
    grid-column: 1;
    grid-row: 1;

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      width: 29.3rem;
      height: 30rem;
    }

    .option-chip-icon {
      @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
        width: 10.8rem;
        height: 12.5rem;
      }
    }
  `,
  PickedText: styled.span`
    line-height: 3.2rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm2};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1875rem;
    color: ${({ theme: { colors } }) => colors.resultsPickedText};
    text-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.tabletLandscape} {
      letter-spacing: 0.3rem;
      font-size: ${({ theme: { fontSizes } }) => fontSizes.med2};
      order: -1;
    }
  `,
  ResultsAndPlayAgainContainer: styled.div`
    grid-area: results;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  `,
  ResultsText: styled.span`
    line-height: 6.7rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme: { colors } }) => colors.resultsGameResultsText};
    text-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};
  `,
  PlayAgainButton: styled(Button)`
    padding: 1.5rem 6rem;
    box-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};

    text-transform: uppercase;
    line-height: 1.9rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.reg};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
    letter-spacing: 0.25rem;
  `,
}

export const ResultTextMap = {
  [Result.UserWins]: 'You win',
  [Result.UserLoses]: 'You lose',
  [Result.Draw]: 'Draw',
} as const

export const ResultsArea = () => {
  const { playerPick, housePick, result, playAgain } = useGameContext()
  const [showPlayAgainBtn, setShowPlayAgainBtn] = useState(false)

  useEffect(() => {
    if (result) {
      setTimeout(() => {
        setShowPlayAgainBtn(true)
      }, PLAY_AGAIN_BUTTON_DELAY)
    }
  }, [result])

  return (
    <S.ResultsArea>
      <S.PlayerPickContainer>
        <S.OptionChipContainer>
          {playerPick && <S.OptionChip option={playerPick} />}
        </S.OptionChipContainer>
        <S.PickedText>You picked</S.PickedText>
      </S.PlayerPickContainer>
      <S.HousePickContainer>
        <S.OptionChipContainer>
          {housePick && <S.OptionChip option={housePick} />}
        </S.OptionChipContainer>
        <S.PickedText>The house picked</S.PickedText>
      </S.HousePickContainer>
      {result && (
        <S.ResultsAndPlayAgainContainer>
          <S.ResultsText data-testid="results text">{ResultTextMap[result]}</S.ResultsText>
          {showPlayAgainBtn && (
            <S.PlayAgainButton onClick={playAgain}>Play again</S.PlayAgainButton>
          )}
        </S.ResultsAndPlayAgainContainer>
      )}
    </S.ResultsArea>
  )
}
