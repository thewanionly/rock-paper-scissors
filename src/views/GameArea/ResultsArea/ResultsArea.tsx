import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { Button } from 'components'
import { useGameContext } from 'context'
import { Result } from 'types'
import { useEffect, useState } from 'react'
import { PLAY_AGAIN_BUTTON_DELAY } from '../GameArea.constants'
import { PickedOptionChip } from './PickedOptionChip'

const resultsTextMount = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: [1, 1, 1], scale: [1, 1.2, 1] },
  transition: { duration: 0.4, ease: 'easeOut' },
}

const resultsButtonMount = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.2, ease: 'easeOut' },
}

const buttonTap = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  transition: { type: 'spring', stiffness: 400, damping: 25 },
}

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
      min-width: 70rem;
      max-width: none;
      width: max-content;
    }

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      grid-template-areas: 'player-picked results house-picked';
      column-gap: 8rem;
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

    @media only screen and ${({ theme: { breakPoints } }) => breakPoints.desktop} {
      align-self: flex-end;
      margin-bottom: 10.4rem;
    }
  `,
  ResultsText: styled(motion.span)`
    line-height: 6.7rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme: { colors } }) => colors.resultsGameResultsText};
    text-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};
  `,
  PlayAgainButtonContainer: styled.div`
    height: 4.8rem;
    width: 25rem;
    display: flex;
    justify-content: center;
  `,
  PlayAgainButton: styled(motion(Button))`
    padding: 1.5rem 6rem;
    box-shadow: 0px 3px 3px ${({ theme: { colors } }) => colors.boxShadowPrimary};
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
        <PickedOptionChip pickedOption={playerPick} showRings={result === Result.UserWins} />
        <S.PickedText>You picked</S.PickedText>
      </S.PlayerPickContainer>
      <S.HousePickContainer>
        <PickedOptionChip
          pickedOption={housePick}
          showRings={result === Result.UserLoses}
          showPickedOptionAnimation
          showPlaceholder
        />
        <S.PickedText>The house picked</S.PickedText>
      </S.HousePickContainer>
      {result && (
        <S.ResultsAndPlayAgainContainer>
          <S.ResultsText data-testid="results-text" {...resultsTextMount}>
            {ResultTextMap[result]}
          </S.ResultsText>
          <S.PlayAgainButtonContainer>
            {showPlayAgainBtn && (
              <S.PlayAgainButton onClick={playAgain} {...buttonTap} {...resultsButtonMount}>
                Play again
              </S.PlayAgainButton>
            )}
          </S.PlayAgainButtonContainer>
        </S.ResultsAndPlayAgainContainer>
      )}
    </S.ResultsArea>
  )
}
